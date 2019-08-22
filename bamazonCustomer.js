var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonDB"
});



connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showProducts();

  //connection.end();
});

function showProducts() {
  connection.query("SELECT * FROM products", function (err, data) {
    if (err) throw err;

    console.table(data);

    questions(data);
  });
};

function questions(newData) {

  inquirer.prompt([

    {
      type: "input",
      name: "id",
      message: "What iD are you intersted in?"
    },

    {
      type: "input",
      name: "quantity",
      message: "How many items do you want to purchase?"
    }
  ]).then(function (response) {
    let choice = response.id - 1
    let actualQuantity = newData[choice].stock_quantity;
    console.log(choice);
 
    console.log(response);
    if (response.quantity > actualQuantity) {
      console.log("Insufficient quantity!");

    };

    if (response.quantity <= actualQuantity) {
      newQuantity = actualQuantity - parseInt(response.quantity);
      console.log(newQuantity);
      console.log("item id: " + response.id)
      connection.query("UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: newQuantity,
          },
          {
            item_id: response.id
          }
        ],
        function (error) {
          if (error) throw error;
          console.log("Purchase Successful!");

        }  );      
        };
  });
};

