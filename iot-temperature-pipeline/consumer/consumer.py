import json
import pika
import psycopg2

# Configurações
RABBITMQ_HOST = 'rabbitmq'
QUEUE_NAME = 'temperature_queue'
DB_HOST = 'db'
DB_NAME = 'postgres'
DB_USER = 'postgres'
DB_PASSWORD = 'postgres'

def save_to_db(device_id, temperature):
    """Salva a leitura de temperatura no banco de dados."""
    connection = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO temperature_readings (device_id, temperature) VALUES (%s, %s)",
        (device_id, temperature)
    )
    connection.commit()
    cursor.close()
    connection.close()

def callback(ch, method, properties, body):
    """Callback para processar mensagens da fila."""
    message = json.loads(body)
    device_id = message['device_id']
    temperature = message['temperature']
    print(f" [x] Received {message}")
    save_to_db(device_id, temperature)

if __name__ == "__main__":
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=RABBITMQ_HOST))
    channel = connection.channel()
    channel.queue_declare(queue=QUEUE_NAME)

    channel.basic_consume(queue=QUEUE_NAME, on_message_callback=callback, auto_ack=True)
    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()