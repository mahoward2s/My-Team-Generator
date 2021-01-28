// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

    super(name, id, email);
    this.school = school;
    }
    getSchool() {
        //console.log(`Employee Role: ${this.school}`);
        return this.school;

    }
    getRole() {
        //console.log(`Employee Role: ${this.role}`);
        return 'Intern';
    }
}

module.exports = Intern;