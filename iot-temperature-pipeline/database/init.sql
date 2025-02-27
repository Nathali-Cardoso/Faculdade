CREATE TABLE temperature_readings (
    id SERIAL PRIMARY KEY,
    device_id VARCHAR(50) NOT NULL,
    temperature FLOAT NOT NULL,
    reading_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);