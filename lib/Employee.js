// TODO: Write code to define and export the Employee class
function Employee(name, id, email, role) {
    this.name = name
    this.id = id
    this.email = email
    this.role = role
}

getName() {
    //console.log(`Employee Name: ${this.name}`);
    return this.name;
};

getID() {
    //console.log(`Employee Id: ${this.id}`);
    return this.name;
};

getEmail() {
    //console.log(`Employee Email: ${this.email}`);
    return this.name;
};

getRole() {
    //console.log(`Employee Role: ${this.role}`);
    return this.role;
}

module.exports = Employee;