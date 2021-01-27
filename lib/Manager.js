// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
    // saw something about supers for the name, id email....need to ask brandon and paal about this
    this.officeNumber = officeNumber,
    }
getOfficeNumber(){
    //console.log(`Employee Role: ${this.officeNumber}`);
    return this.officeNumber;

}
getRole() {
    //console.log(`Employee Role: ${this.role}`);
    return 'Manager';
}
}

module.exports = Manager;