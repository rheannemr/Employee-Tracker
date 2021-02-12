// Install dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

// Create connection 
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: '',
    database: "department_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as Id" + connection.threadId);
    appMenu();
});

function appMenu {
    inquirer.prompt([
     {
         type: "list",
         message: "Hello! What would you like to do?",
         name: "choice",
         choices: [
             "View all departments",
             "View all roles",
             "View all employees",
             "Add a department",
             "Add a role",
             "Add an employee",
             "Update employee information"
         ]
     }   
    ])
}