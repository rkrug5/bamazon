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


// var price;

connection.connect(function (err, res) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");

	displayProducts();


})
// changing this all into a function

function displayProducts() {
	// connect to the mysql server and sql database


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


}



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
	console.log("Thanks for stopping by! Please Come Again")
	connection.end();
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
		.then(function (response) {


			var which = parseInt(response.buyingChoice);
			var howMany = parseInt(response.howMany);


			var query = connection.query("SELECT * FROM books WHERE ?", {
				id: response.buyingChoice
			},
				function (err, res) {
					var price = res[0].price;
					var quantity = res[0].quantity;
					var cost = howMany * price;
					var stockLeft = quantity - howMany;

					if (quantity >= howMany) {
						console.log("The cost of you purchase today is: $" + cost);

						//update the db to reflect the sold items
						var query = connection.query("UPDATE books SET ? WHERE ?", [{ quantity: stockLeft },
						{
							id: response.buyingChoice
						}]
						)





					}

					else {
						console.log("Sorry, we don't have that many. \n Please contact the manager about special orders.")
					}



					buySomethingElse();
					// console.log(price);
					// console.log(price);
				}
			)


			// function (err, res) {
			// 	var price = answer[0].price;
			// 	var total = price * answer.howMany



			// 	if (numberInStock > answer.howMany) {

			// 		console.log("Thank You, Your total is: $" + total);
			// 	}

			// 	else {


			// 		console.log("Sorry, we don't have that many in stock");
			// 	}

		})


}


// connection.end();

// });
function buySomethingElse() {

	inquirer
		.prompt({
			name: "decision",
			type: "rawlist",
			message: "What would you like to do now?",
			choices: ["Buy Something Else", "Leave"]
		})
		.then(function (answer) {
			if (answer.decision === "Buy Something Else") {
				buyFunc();
			}
			else if (answer.decision === "Leave") {
				exitFunc();
			}

			else {
				console.log("Please enter a valid selection");
			}



		})
}