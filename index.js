const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamMembers = [];
let manager;
let teamTitle;

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
        }
    ])
    .then(managerAnswers => {
        manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
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
            choices: ["Engineer", "Intern"],
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
        }
    ])
    .then(answers => {
        if (answers.employeeRole === "Engineer") { 
            teamMembers.push(new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.gitHub));
        }
        else if (answers.employeeRole === "Intern"){
            teamMembers.push(new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school));
        }
        if (answers.newEmployee === true) {
            otherEmployeeData();
        }
        else {
            let main = fs.readFileSync('./templates/main.html', 'utf8');
            //took me awhile to figure out how to ignore first instance replace
            main = main.replace(/{{teamTitle}}/g, teamTitle);
            let managerCard = fs.readFileSync('./templates/Manager.html', 'utf8');
            managerCard = managerCard.replace('{{name}}', manager.getName());
            managerCard = managerCard.replace('{{role}}', manager.getRole());
            managerCard = managerCard.replace('{{id}}', manager.getId());
            managerCard = managerCard.replace('{{email}}', manager.getEmail());
            managerCard = managerCard.replace('{{officeNumber}}', manager.getOfficeNumber());

            var cards = managerCard;
            for (var i = 0; i < teamMembers.length; i++) {
                var employee = teamMembers[i];
                cards += renderEmployee(employee);
            }

            main = main.replace('{{cards}}', cards);

            fs.writeFileSync('./output/team.html', main);

            console.log("The team.html has been generated in output");
        }
    });
}
function renderEmployee(employee) {
    if (employee.getRole() === "Engineer") {
        var engineerCard = fs.readFileSync('./templates/Engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getId());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
        return engineerCard;
    } else if (employee.getRole() === "Intern") {
        var internCard = fs.readFileSync('./templates/Intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getId());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    } 
}

managerData();