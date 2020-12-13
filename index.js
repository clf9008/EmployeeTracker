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

//