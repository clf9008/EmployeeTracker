//dependencies 
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require('console.table');

//creating connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_trackerDB"
  });
//connection ID
connection.connect(err => {
    if (err) throw err;
    console.log('MYSQL connected ' + connection.threadId);
    startPrompt();
});

//Prompt that will display upon running application 
function startPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees?", 
                "View All Employee's By Roles?",
                "View all Emplyees By Deparments", 
                "Update Employee",
                "Add Employee?",
                "Add Role?",
                "Add Department?"
            ]
      }
    ]).then(function(val) {
        switch (val.choice) {
            case "View All Employees?":
                viewAllEmployees();
            break;

            
        }
    })
}