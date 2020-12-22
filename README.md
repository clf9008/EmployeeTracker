# EmployeeTracker
A CMS (Content Management System) System to track employees by job, position, department, and manager using node, iquirer, and MYSQL. 

## Running the Application 
You must create a database using MYSQL to run this application. 

1. Copy and pull the code from GitHub and install the packages in the packages.json file in the Employee Tracker directory.
2. In you Employee Tracker directory there is a "db" directory. In that directory there are two files: employee_db.sql and seed.sql. 
    a. Open your MySQL Workbench and execute the employee.sql to create the database and tables.
    b. Then execute the seed.sql to populate the Employee Tracker application with data. 
3. Now your database is ready to be quaried, open the index.js file and update the root and password from your personal MYSQL database. 
4. Open a Git terminal. Navigate to the main directory of the Employee Tracker. Type "node index.js".

### Installing
1. Go to https://github.com/clf9008/EmployeeTracker and click on the "Clone Repository" button. 
2. Create a directory folder on your desktop and open with VS code.
3. Open a terminal inside of VS Code and clone the repository to your personal directory.
4. Once the file is cloned to your directory, navigate to employee-tracker-master.
5. Install the dependencies required for this application to work by typing the following in the terminal:
   * npm install inquirer
   * npm install mysql
   * npm install console-table
6. Use your Git terminal to execute index.js. 

#### Required Applications
- [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)
- [Node](https://nodejs.org/en/download/)
  -inqiurer
  -mysql
  -console.table
##### Application Preview
