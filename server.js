// const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2');

const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'management_db'
  },
  console.log(`Connected to the management_db database.`)
);

// adds the starting question prompt
function intialChoices() {
    inquirer.prompt({
        name: 'choices',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all employees', 'Add employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    })
    // depending on how the user responds, this will take them to the choice they made
    .then(({ action }) => {
        switch (action) {
            case 'View all Employees':
                viewEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View all Roles':
                viewRoles();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'View all Departments':
                viewDepartments();
                break;
            case 'Add Departments':
                addDepartment();
                break;
        }
    });
};


function viewEmployees() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function addEmployee() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function updateEmployeeRole() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function viewRoles() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function addRole() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function viewDepartments() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function viewEmployees() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};

function addDepartment() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        intialChoices();
    });
};
