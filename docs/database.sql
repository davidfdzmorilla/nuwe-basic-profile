DROP DATABASE IF EXISTS nuwe_profle;
CREATE DATABASE IF NOT EXISTS nuwe_profile;

USE nuwe_profile;

DROP TABLE IF EXISTS users;
CREATE TABLE users
(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	header_pic VARCHAR (255) NOT NULL,
	avatar VARCHAR (255) NOT NULL,
	name VARCHAR (255) NOT NULL,
	email VARCHAR (255) UNIQUE NOT NULL,
	password VARCHAR (255) NOT NULL,
	tel INT (255) NOT NULL,
	profession_type VARCHAR (255) NOT NULL,
	profession_level VARCHAR (255) NOT NULL,
	bio VARCHAR (600) NOT NULL,
	country VARCHAR (255) NOT NULL,
	city VARCHAR (255) NOT NULL,
	linkedin VARCHAR (255) NOT NULL,
	github VARCHAR (255) NOT NULL,
	gitlab VARCHAR (255) NOT NULL,
	behance VARCHAR (255) NOT NULL,
	ubication VARCHAR (255) NOT NULL,
	type_company VARCHAR (255) NOT NULL,
	min_salary INT (255) NOT NULL,
	like_salary INT (255) NOT NULL,
	availability_to_travel BOOLEAN NOT NULL DEFAULT false,
	remote_work BOOLEAN NOT NULL DEFAULT false,
	inmediate_incorporation BOOLEAN NOT NULL DEFAULT false
);