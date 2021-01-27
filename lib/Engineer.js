// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
    // saw something about supers for the name, id email....need to ask brandon and paal about this
    this.github = github,
    }
getGithub(){
    //console.log(`Employee Role: ${this.github}`);
    return this.github;

}
getRole() {
    //console.log(`Employee Role: ${this.role}`);
    return 'Engineer';
}
}

module.exports = Engineer;