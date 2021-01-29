const fs = require('fs');
const inquirer = require('inquirer');

const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');


//Prompt user for manager information
const managerData = () =>
    inquirer.prompt([
        {
            //Team info
            type: "input",
            message: "What is the name of the team?",
            name: "teamTitle"
        },
        {
            //Manager Information/Role
            type: "input",
            message: "Who is the manager of this team?",
            name: "managerName"
        },
        {
            //Manager ID
            type: "input",
            message: "What is the ID of the manager?",
            name: "managerId"
        },
        {
            //Manager Email
            type: "input",
            message: "What is the manager's email?",
            name: "managerEmail"
        },
        {
            //Manager Office Number
            type: "input",
            message: "What is the office number for the manager?",
            name: "teamTitle"
        },
    ])