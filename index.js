const fs = require('fs');
const inquirer = require('inquirer');

const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');


//Prompt user for manager information
function managerData(){
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
            name: "managerOfficeNumber"
        },
    ])
    .then(managerAnswers => {
        manager = newManager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
        teamTitle = managerAnswers.teamTitle;
        console.log("Now we need to know other employee information.")
        otherEmployeeData();
    });
}

//prompts for other employees
function otherEmployeeData() {
    inquirer.prompt([
        //user chooses whether it is an engineer or intern
        {
            type: "list",
            message: "What is this Team Member/Employee's role?",
            name: "employeeRole",
            choice: ["Engineer", "Intern"]
        },
        //user input
        {
            //Employee Name
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName"
        },
        {
            //Employee Id
            type: "input",
            message: "What is the employee's id?",
            name: "employeeId"
        },
        {
            //Employee Email
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail"
        },
        {
            //Employee GitHub
            type: "input",
            message: "What is the Engineer's GitHub?",
            name: "gitHub",
            when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            //Intern's School
            type: "input",
            message: "What school does the Intern attend?",
            name: "school",
            when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            //Adding another employee
            type: "confirm",
            message: "Would you like to add another Team Member/Employee?",
            name: "newEmployee"
        },
    ])
}