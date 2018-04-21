-- if a table exists already, get rid of it to make space for our new one
-- i will keep it edited out so that you can select all and run it without accidentally deleting a db we are already working with,  but can still have it written out in case we need to run it
--DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE books (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	title VARCHAR(100) NOT NULL, 
	author VARCHAR (100) NOT NULL, 
	`yearPublished` INT (4) NOT NULL, 
	price FLOAT (6, 2), 
	rating FLOAT (5, 2),
	quantity INT (10), 
	department VARCHAR (30) NOT NULL
);


INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Eloquent JavaScript", "Marijn Haverbeke", 2014, 31.96, 4.2, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("JavaScript: The Good Parts", " Douglas Crockford", 2008, 20.41, 4.3, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("You Don't Know JS: Up & Going", "Kyle Simpson", 2015, 4.79, 4.6, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("The Linux Command Line", "William E. Shotts Jr. ", 2012, 31.96, 4.7, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Python Crash Course", "Eric Matthes", 2015, 27.16, 4.5, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Automate the Boring Stuff with Python", "Al Sweigart", 2015, 23.96, 4.6, 10, "nonfiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Fahrenheit 451", "Ray Bradbury", 2012, 8.99, 4.4, 10, "fiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Player Piano: A Novel", "Kurt Vonnegut", 1999, 13.52, 4.3, 20, "fiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("A Canticle for Leibowitz", "Walter M. Miller Jr.", 1984, 6.59, 4.3, 10, "fiction");

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity, department)
VALUES ("Brain Droppings", "George Carlin", 1998, 13.20, 4.3, 10, "fiction");







------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------



CREATE TABLE `departments` (
	department_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	department_name VARCHAR (30) NOT NULL, 
	over_head_costs FLOAT (20, 2)
);

INSERT INTO departments (department_name, overhead_costs)
VALUES ("nonfiction", 2087.50);


INSERT INTO departments (department_name, overhead_costs)
VALUES ("fiction", 1364.00);
