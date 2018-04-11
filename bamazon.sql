-- if a table exists already, get rid of ti to make space for our new one
DROP DATABASE IF EXISTS bamazonDB;


CREATE DATABASE bamazonDB;

USE bamazonDB;


CREATE TABLE products (
	productId INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
	title VARCHAR(100) NOT NULL, 
	author VARCHAR (100) NOT NULL, 
	`yearPublished` INT (4) NOT NULL, 
	price FLOAT (6, 2), 
	rating FLOAT (5, 2),
	quantity INT (10)
);


INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Eloquent JavaScript", "Marijn Haverbeke", 2014, 31.96, 4.2, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("JavaScript: The Good Parts", " Douglas Crockford", 2008, 20.41, 4.3, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("You Don't Know JS: Up & Going", "Kyle Simpson", 2015, 4.79, 4.6, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("The Linux Command Line: A Complete Introduction", "William E. Shotts Jr. ", 2012, 31.96, 4.7, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Python Crash Course: A Hands-On, Project-Based Introduction to Programming", "Eric Matthes", 2015, 27.16, 4.5, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Automate the Boring Stuff with Python: Practical Programming for Total Beginners", 2015, 23.96, 4.6, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Fahrenheit 451", "Ray Bradbury", 2012, 8.99, 4.4, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Player Piano: A Novel", "Kurt Vonnegut", 1999, 13.52, 4.3, 20);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("A Canticle for Leibowitz", "Walter M. Miller Jr.", 1984, 6.59, 4.3, 10);

INSERT INTO books (title, author, `yearPublished`, price, rating, quantity)
VALUES ("Brain Droppings", "George Carlin", 1998, 13.20, 4.3, 10);


SELECT * FROM products;