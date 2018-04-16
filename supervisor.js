
var mysql = require("mysql");
var inquirer = require("inquirer");
var a = 1;

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "root",
	database: "bamazonDB"
});


function superOptions() {

	inquirer
		.prompt({
			name: "superChoices",
			type: "rawlist",
			message: "Greetings Supervior, what would you like to do today?",
			choices: ["View Product Sales by Department", "Create New Department"]
		})
		.then(function (answer) {
