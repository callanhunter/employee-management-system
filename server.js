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
function initialChoices() {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add a Role', 'View All Departments', 'Add Departments']
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
            case 'View All Roles':
                viewRoles();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'View All Departments':
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
    let query = 'SELECT * FROM employee';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

async function addEmployee() {
    const roles = await db.promise().query("SELECT id AS value, title AS name FROM role")
    const managers = await db.promise().query("SELECT id AS value, last_name AS name FROM employee")
    const prompts = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "last_name"
        },
        {
            type: "list",
            message: "Choose the role of the employee",
            name: "role_id",
            choices: roles[0]
        },
        {
            type: "list",
            message: "Choose the manager of the employee",
            name: "manager_id",
            choices: managers[0]
        }
    ])
    const db_entry = await db.promise().query("INSERT into employee SET ?", prompts)
    console.log("Employee Added!")
    initialChoices();
};




async function addDepartment() {
    const department = await db.promise().query("INSERT INTO departments (name) VALUES (?)")
    const prompts = await inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the Department",
            name: "newDepartment"
        },
    ])
    const db_entry = await db.promise().query("INSERT into department SET ?", prompts)
    console.log("Department Added!")
    initialChoices();
};















async function addRole() {
    const roles = await db.promise().query("SELECT id AS value, title AS name FROM role")
    const managers = await db.promise().query("SELECT id AS value, last_name AS name FROM employee")
    const prompts = await inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "first_name"
        },
        {
            type: "input",
            message: "What is the employee's last name?",
            name: "last_name"
        },
        {
            type: "list",
            message: "Choose the role of the employee",
            name: "role_id",
            choices: roles[0]
        },
        {
            type: "list",
            message: "Choose the manager of the employee",
            name: "manager_id",
            choices: managers[0]
        }
    ])
    const db_entry = await db.promise().query("INSERT into employee SET ?", prompts)
    console.log("Employee Added!")
    initialChoices();
};

function updateEmployeeRole() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

function viewRoles() {
    console.log('Viewing all roles');
    let query = 'SELECT * FROM role;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

function addRole() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

function viewDepartments() {
    console.log('Viewing all departments');
    let query = 'SELECT * FROM department;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

function addDepartment() {
    console.log('Viewing all employees');
    let query = 'SELECT * FROM;';
    db.query(query, (err, row) => {
        if (err) throw (err);
        console.table(row);
        initialChoices();
    });
};

initialChoices();