#INSERT INFO
INSERT INTO owners(name, phone) VALUES
('Adriana Alava','111 111 111'),
('Kevin Bautista','222 222 222');

SELECT * FROM owners

INSERT INTO pets(name, species, age,owner_id) VALUES
('Bambu', 'Cat', 1,1),
('Lucky', 'Cat', 1,1),
('Yanko', 'Dog', 10,2),
('Zeus', 'Dog', 5,2);

SELECT * FROM pets WHERE owner_id =1


INSERT INTO vets(name, specialization) VALUES
('Ross', 'Surgery'),
('Laura', 'Internal Medicine');

INSERT INTO appointments (date, pet_id, vet_id) VALUES
('2025-07-01:00', 1,2),
('2025-07-01:00', 4,1);

SELECT * from appointments

INSERT INTO vaccines (name, description) VALUES
('Rabies','A viral disease that is fatal and also transmissible to humans, making the vaccine crucial for both pet and public health. '),
('Distemper', 'A highly contagious and potentially fatal viral disease that affects the respiratory, gastrointestinal, and nervous systems. ');

SELECT * from vaccines v 

INSERT INTO pet_vaccines (pet_id, vaccine_id, time_of_vaccination) VALUES
(1,1,'2024-07-26:00'),
(2,1,'2024-07-26:00'),
(3,1,'2014-06-13:00'),
(4,1,'2020-02-02:00');

SELECT * from pet_vaccines


#UPDATE QUERY
#Varias columnas de un registro
UPDATE pet_vaccines 
SET time_of_vaccination = '2020-03-02:00'
	#vaccine_name = 'Rabies',
    #veterinarian = 'Dr. López'
WHERE id = 4;

#Una col de varios registros
UPDATE pet_vaccines 
SET time_of_vaccination = '2020-03-02 00:00:00'
WHERE id IN (1, 2, 3);

#OTHER QUERIES
SELECT * from pets WHERE species = "Dog" #and id = 1

#JOINS
SELECT * FROM appointments 
JOIN pets ON appointments.pet_id = pets.id

SELECT a.id as appoinment_id, p.id as pet_id FROM appointments as a 
JOIN pets as p ON a.pet_id = p.id
JOIN vets as v ON a.vet_id = v.id;

SELECT  p.name as pet_name, p.species, p.age, p.owner_id, o.name as owner_name, o.phone FROM owners as o 
JOIN pets as p ON o.id = p.owner_id;

SELECT  o.id, o.name as owner_name, COUNT(p.id)as number_of_pets FROM owners as o 
JOIN pets as p ON o.id = p.owner_id GROUP BY(o.id);

#DELETE
DELETE FROM pets where id>4;















