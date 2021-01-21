-- DROP DATABASE IF EXISTS rooting4u;

CREATE DATABASE rooting4u;

USE rooting4u;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  userId VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE plant_info (
  id int NOT NULL AUTO_INCREMENT,
  userRef int NOT NULL,
  plant_name VARCHAR(255) NOT NULL,
  plantImg VARCHAR(255) NOT NULL,
  chosen_name VARCHAR(255),
  lastWatered TIMESTAMP, 
  status BOOLEAN NOT NULL,
  location VARCHAR(255), 
  FOREIGN KEY (userRef) REFERENCES users(id)
  PRIMARY KEY (id)
);

CREATE TABLE plant_diary (
  id int NOT NULL AUTO_INCREMENT,
  plantRef int NOT NULL,
  date TIMESTAMP NOT NULL,
  log VARCHAR(255), 
  FOREIGN KEY (plantRef) REFERENCES plant_info(id),
  PRIMARY KEY (id)
);


