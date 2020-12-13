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
const promptUser = () => {
    inquirer.prompt ([
      {
        type: 'list',
        name: 'choices', 
        message: 'What would you like to do?',
        choices: ['View all departments', 
                  'View all roles', 
                  'View all employees', 
                  'Add a department', 
                  'Add a role', 
                  'Add an employee', 
                  'Update an employee role',
                  'Update an employee manager',
                  "View employees by department",
                  'Delete a department',
                  'Delete a role',
                  'Delete an employee',
                  'View department budgets',
                  'No Action']
      }
    ])
      .then((answers) => {
        const { choices } = answers; 
  
        if (choices === "View all departments") {
          showDepartments();
        }
  
        if (choices === "View all roles") {
          showRoles();
        }
  
        if (choices === "View all employees") {
          showEmployees();
        }
  
        if (choices === "Add a department") {
          addDepartment();
        }
  
        if (choices === "Add a role") {
          addRole();
        }
  
        if (choices === "Add an employee") {
          addEmployee();
        }
  
        if (choices === "Update an employee role") {
          updateEmployee();
        }
  
        if (choices === "Update an employee manager") {
          updateManager();
        }
  
        if (choices === "View employees by department") {
          employeeDepartment();
        }
  
        if (choices === "Delete a department") {
          deleteDepartment();
        }
  
        if (choices === "Delete a role") {
          deleteRole();
        }
  
        if (choices === "Delete an employee") {
          deleteEmployee();
        }
  
        if (choices === "View department budgets") {
          viewBudget();
        }
  
        if (choices === "No Action") {
          connection.end()
      };
    });
  };
//View All Employees function
function viewAllEmployees() {
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      startPrompt()
  })
}