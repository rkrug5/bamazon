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
	connection.query('SELECT * FROM books', function (err, data) {

		if (err) {

			throw err;
		}
		// console.log(data);

		for (var i = 0; i < 10; i++) {
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

		start();

	})




	function start() {
		inquirer
			.prompt({
				name: "welcome",
				type: "rawlist",
				message: "Hello, what would you like to do today?",
				choices: ["Buy Something", "Leave"]
			})
			.then(function (answer) {
				if (answer.welcome === "Buy Something") {
					buyFunc();
				}
				else if (answer.welcome === "Leave") {
					exitFunc();
				}

				else {
					console.log("Please enter a valid selection");
				}



			})

	}

	function exitFunc() {

	}


	function buyFunc() {
		inquirer
			.prompt([{
				name: "buyingChoice",
				type: "input",
				message: "What item would you like to purchase?\n(please enter the item's id #)"
			},
			{
				name: "howMany",
				type: "input",
				message: "How many of them would you like?"

			}])
			.then(function (answer) {





			})

	}
	connection.end();

});
