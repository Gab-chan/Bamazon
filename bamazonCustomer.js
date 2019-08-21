var inquirer = require("inquirer");
var mysql = require("mysql");
require("console.table");

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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  showProducts();
  connection.end();
});

function showProducts(){
    connection.query("SELECT * FROM products", function(err, data){
        if (err) throw err;
        
        console.table(data);
        
        questions(data);
        
        
    })
};

function questions(newData){
 
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
      
      
    ]).then(function(response){
      let choice = response.id - 1
      console.log(choice)
        console.log(response);
        
        if (response.quantity > newData[choice].stock_quantity){
          console.log("Insufficient quantity!");
        
        }
    });



};

function purchase(){



};

// Make functions for the purchases and everything that is needed.