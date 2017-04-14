DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS macros;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  age INTEGER,
  weight INTEGER,
  created_at INTEGER,
  updated_at INTEGER
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  exampleMeal VARCHAR(255),
  calories INTEGER,
  imgURL VARCHAR(255)
);

CREATE TABLE macros (
  protein INTEGER
  fat INTEGER
  carbohydrates INTEGER
);
