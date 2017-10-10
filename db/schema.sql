DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id) 
)