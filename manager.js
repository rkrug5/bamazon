

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

options();



function options() {

	inquirer
		.prompt({
			name: "managerChoices",
			type: "rawlist",
			message: "Greetings Manager, what would you like to do today?",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
		})
		.then(function (answer) {

			if (answer.managerChoices === "View Products for Sale") {
				displayProducts();
			}
			else if (answer.managerChoices === "View Low Inventory") {
				lowInventory();
			}

			else if (answer.managerChoices === "Add to Inventory") {
				addInventory();
			}


			else if (answer.managerChoices === "Add New Product") {
				addProduct();
				// readProducts();
			}


		})

}

function displayProducts() {
	// connect to the mysql server and sql database


	// createProduct();
	connection.query('SELECT * FROM books', function (err, data) {

		if (err) { throw err; }


		var idArray = [];


		for (let i = 0; i < data.length; i++) {
			console.log(
				"Id: " + data[i].id +
				"  " + data[i].title +
				" || Author: " +
				data[i].author +
				" || Price: " +
				data[i].price +
				" || Quantity: " +
				data[i].quantity

			);
			idArray.push(data[i].id);

		}

	})


}

function lowInventory() {
	connection.query('SELECT * FROM books WHERE quantity < 10', function (err, data) {
		for (let i = 0; i < data.length; i++) {
			console.log(
				"Id: " + data[i].id +
				"  " + data[i].title +


				" || Quantity: " +
				data[i].quantity

			);

		}
	})

}

function addInventory() {


	inquirer
		.prompt([{
			name: "restock",
			type: "input",
			message: "What item id # you would like to restock today?"
		},
		{
			name: "restockAmount",
			type: "input",
			message: "How many are adding?"

		}])
		.then(function (answer) {
			var identity = parseInt(answer.restock);
			var restockAmount = parseInt(answer.restockAmount);


			connection.query('SELECT * FROM books WHERE id = identity', function (err, data) {
				var currentNumber = data.quantity;
				var newTotal = restockAmount + currentNumber;


				var query = connection.query(
					"UPDATE products SET ? WHERE ?",
					[
						{
							quantity: newTotal
						},
						{
							id: answer.restock
						}
					],
					function (err, res) {
						console.log(" products updated!");
						// Call deleteProduct AFTER the UPDATE completes
						//   deleteProduct();
					}
				);

			})

		})

}

function addProduct() {


}



// function readProducts() {
// 	console.log("Selecting all products...\n");
// 	connection.query("SELECT * FROM books", function (err, res) {
// 		if (err) throw err;
// 		// Log all results of the SELECT statement
// 		console.log(res);
// 		connection.end();
// 	});
// }