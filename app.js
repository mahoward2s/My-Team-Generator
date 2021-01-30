const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employees = [];

//Prompt user for manager information
const promptUser = () =>
{    inquirer.prompt([
        {
            type: 'list',
            message: 'Employee Type?',
            name: 'type',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
    ]).then((answers) => {
        console.log(answers)
        if (answers.type == 'Done') {
            // Render HTML
            createTeam()
            // return
        }else if (answers.type == 'Manager') {
            manager()
        }else if (answers.type == 'Engineer') {
            engineer()
        }else if (answers.type == 'Intern') {
            intern()
        }
      })
} 
//Manager Info------------
const manager = () =>
inquirer.prompt([
    {
        //Manager Information/Role
        type: "input",
        message: "Who is the manager of this team?",
        name: "name"
    },
    {
        //Manager ID
        type: "input",
        message: "What is the ID of the manager?",
        name: "id"
    },
    {
        //Manager Email
        type: "input",
        message: "What is the manager's email?",
        name: "email"
    },
    {
        //Manager Office Number
        type: "input",
        message: "What is the office number for the manager?",
        name: "officeNumber"
    }
]).then((answers) => {
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    employees.push(newManager)
    promptUser()
})

//Engineer Info------------
const engineer = () =>
inquirer.prompt([
    {
        //engineer Information/Role
        type: "input",
        message: "What is the Engineer's name?",
        name: "name"
    },
    {
        //engineer ID
        type: "input",
        message: "What is the ID of the Engineer?",
        name: "id"
    },
    {
        //engineer Email
        type: "input",
        message: "What is the Engineer's email?",
        name: "email"
    },
    {
        //engineer github
        type: "input",
        message: "What is the Engineer's GitHub?",
        name: "gitHub"
    }
]).then((answers) => {
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
    employees.push(newEngineer)
    promptUser()
})

//Intern Info------------
const intern = () =>
inquirer.prompt([
    {
        //engineer Information/Role
        type: "input",
        message: "What is the Intern's name?",
        name: "name"
    },
    {
        //engineer ID
        type: "input",
        message: "What is the ID of the Intern?",
        name: "id"
    },
    {
        //engineer Email
        type: "input",
        message: "What is the Intern's email?",
        name: "email"
    },
    {
        //engineer github
        type: "input",
        message: "Where does the Intern go to school?",
        name: "school"
    }
]).then((answers) => {
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employees.push(newIntern)
    promptUser()
})

//initiate
promptUser()

//writes html
function createTeam() {
    fs.writeFileSync(outputPath, render(employees))
    console.log("The team.html has been generated in output")
}
