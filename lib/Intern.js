// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
    // saw something about supers for the name, id email....need to ask brandon and paal about this
    this.school = school,
    }
getSchool(){
    //console.log(`Employee Role: ${this.school}`);
    return this.school;

}
getRole() {
    //console.log(`Employee Role: ${this.role}`);
    return 'Intern';
}
}

module.exports = Intern;