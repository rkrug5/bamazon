var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "root",
	database: "bamazonDB"
});




// connect to the mysql server and sql database

connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
	// createProduct();
	connection.query('SELECT * FROM products', function (err, data) {

		if (err) {

			throw err;
		}
		// console.log(data);
		for (var i = 0; i < 10; i++) {
			console.log(
				"Item: " +
				data[i].title +
				" || Author: " +
				data[i].author +
				" || Price: " +
				data[i].price +
				" || Quantity: " +

				data[i].quantity
			);
		}

	})

	// inquirer.prompt([

	// 	{
	// 		type: "input",
	// 		name: "name",
	// 		message: "Hello, what is your name?"
	// 	},

	// 	{
	// 		type: "list",
	// 		name: "doingWhat",
	// 		message: "What are you doing in my house??",
	// 		choices: ["I made you cookies!", "No lie dude. I'm here to rob you.", "Uh. This is my house... Who are YOU???"]
	// 	},

	// 	{
	// 		type: "checkbox",
	// 		name: "carryingWhat",
	// 		message: "What are you carrying in your hands??",
	// 		choices: ["TV", "Tray of Warm Cookies", "Butter Knife"]
	// 	},

	// 	{
	// 		type: "confirm",
	// 		name: "canLeave",
	// 		message: "Can you leave now?"
	// 	},

	// 	{
	// 		type: "password",
	// 		name: "myPassword",
	// 		message: "Okay fine. You can stay. But only if you say the magic password."
	// 	}

	// ]).then(function (user) {

	// 	// If the user guesses the password...
	// 	if (user.myPassword === "myHouse") {

	// 		console.log("==============================================");
	// 		console.log("");
	// 		console.log("Well a deal's a deal " + user.name);
	// 		console.log("You can stay as long as you like.");
	// 		console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
	// 		console.log("");
	// 		console.log("==============================================");
	// 	}


	// 	// If the user doesn't guess the password...
	// 	else {

	// 		console.log("==============================================");
	// 		console.log("");
	// 		console.log("Sorry " + user.name);
	// 		console.log("I'm calling the cops!");
	// 		console.log("");
	// 		console.log("==============================================");

	// 	}
	connection.end();
});
