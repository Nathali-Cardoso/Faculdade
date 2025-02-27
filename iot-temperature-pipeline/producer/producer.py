import random
import time
import json
import pika

# Configurações
RABBITMQ_HOST = 'rabbitmq'
QUEUE_NAME = 'temperature_queue'

def generate_temperature():
    """Gera uma leitura de temperatura simulada."""
    return round(random.uniform(20.0, 30.0), 2)

def send_to_queue(temperature, device_id):
    """Envia a leitura de temperatura para a fila RabbitMQ."""
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=QUEUE_NAME)

    message = {
        'device_id': device_id,
        'temperature': temperature
    }
    channel.basic_publish(exchange='', routing_key=QUEUE_NAME, body=json.dumps(message))
    print(f" [x] Sent {message}")
    connection.close()

if __name__ == "__main__":
    device_id = "iot_device_1"
    while True:
        temperature = generate_temperature()
        send_to_queue(temperature, device_id)
        time.sleep(5)