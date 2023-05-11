CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title varchar(36),
    start_date DATE,
    isVisible BOOLEAN DEFAULT FALSE
);