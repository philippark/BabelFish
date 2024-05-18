CREATE DATABASE babelfish;

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    message VARCHAR(255),
    time VARCHAR(255) 
);