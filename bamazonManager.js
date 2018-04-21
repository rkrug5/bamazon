

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

	connection.end();

}

function lowInventory() {
	connection.query('SELECT * FROM books WHERE quantity < 5', function (err, data) {

		if (err) throw err;

		else if (data.length == 0) {
			console.log("There are no items with inventory < 5.")
		}
		else {
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
			}
		}
	})



	// likeToUpdate();
	connection.end();
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
			message: "How many are you adding?"

		}])
		.then(function (answer) {
			var identity = parseInt(answer.restock);
			var restockAmount = parseInt(answer.restockAmount);


			var query = connection.query("SELECT * FROM books WHERE ?", {
				id: answer.restock
			},

				function (err, res) {
					var stock = res[0].quantity;
					var restockId = res[0].id
					var newStock = stock + restockAmount;
					console.log(newStock);

					if (a == 1) {
						var query = connection.query("UPDATE books SET ? WHERE ?", [{ quantity: newStock },
						{
							id: restockId
						}]
						)

						connection.end();
					}
				}
			)
		})
}


function addProduct() {
	inquirer
		.prompt([{
			name: "newProduct",
			type: "input",
			message: "What is the name of the item you would like to add?"
		},
		{
			name: "newAuthor",
			type: "input",
			message: "What is the authors name?"

		},
		{
			name: "newDate",
			type: "input",
			message: "When was it published?"
		},
		{
			name: "newRating",
			type: "input",
			message: "What is its rating?"
		},
		{
			name: "newPrice",
			type: "input",
			message: "What is the price?"
		},
		{
			name: "newQuantity",
			type: "input",
			message: "What quantity is available?"
		}
		])
		.then(function (response) {
			var query = connection.query("INSERT INTO books SET ?", {
				title: response.newProduct,
				author: response.newAuthor,
				yearPublished: response.newDate,
				rating: response.newRating,
				price: response.newPrice,
				quantity: response.newQuantity

			},
				function (err, res) {
					displayProducts();
				}
			)
		})
}

function likeToUpdate() {

	inquirer
		.prompt({
			name: "update",
			type: "list",
			message: "Would hat you like to add some inventory now?",
			choices: ["Yes", "No"]
		})
		.then(function (answer) {

			if (answer.update === "Yes") {
				addInventory();
			}
			else if (answer.update === "No") {
				connection.end();
			}
		})
}
