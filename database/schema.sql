DROP DATABASE IF EXISTS rooting4u;

CREATE DATABASE rooting4u;

USE rooting4u;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE plant_info (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userRef int NOT NULL,
  plant_name VARCHAR(255) NOT NULL,
  plantImg VARCHAR(255) NOT NULL,
  chosen_name VARCHAR(255),
  lastWatered DATE, 
  status BOOLEAN NOT NULL,
  location VARCHAR(255), 
  FOREIGN KEY (userRef) REFERENCES users(id)
);

CREATE TABLE plant_diary (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  plantRef int NOT NULL,
  date TIMESTAMP NOT NULL,
  log VARCHAR(255), 
  FOREIGN KEY (plantRef) REFERENCES plant_info(id)
);

LOAD DATA LOCAL INFILE '/Users/annie/Desktop/hackreactor/rooting-for-you/database/userInfo.csv' INTO TABLE users
  FIELDS TERMINATED BY ',' ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES;

LOAD DATA LOCAL INFILE '/Users/annie/Desktop/hackreactor/rooting-for-you/database/plantInfo.csv' INTO TABLE plant_info
  FIELDS TERMINATED BY ',' ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES;

--modify path above according to where it is in your file
  -- log into mysql type in this -> source <path of this schema>
--follow direction to csvtolocalDB to add csv