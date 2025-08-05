#select 2+3 as addition;
CREATE DATABASE veterinary_ambulance;
USE veterinary_ambulance;

#CREATE TABLES#

#owners table
CREATE TABLE owners(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	phone VARCHAR(255) NOT NULL
);

#pets table
CREATE TABLE pets(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	species VARCHAR(255) NOT NULL,
	age SMALLINT,
	owner_id BIGINT,
	FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE
);

#VETS TABLE
CREATE TABLE IF  NOT EXISTS vets(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	specialization VARCHAR(255)
);

#appointment table
CREATE TABLE IF NOT EXISTS appointments(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	date DATETIME,
	pet_id BIGINT,
	vet_id BIGINT,
	FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
	FOREIGN KEY (vet_id) REFERENCES vets(id)
);

#vaccines table
CREATE TABLE IF NOT EXISTS vaccines(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	description TEXT
);

CREATE TABLE IF NOT EXISTS pet_vaccines(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	pet_id BIGINT,
	vaccine_id BIGINT,
	time_of_vaccination DATETIME,
	FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
	FOREIGN KEY (vaccine_id) REFERENCES vaccines(id)
);

