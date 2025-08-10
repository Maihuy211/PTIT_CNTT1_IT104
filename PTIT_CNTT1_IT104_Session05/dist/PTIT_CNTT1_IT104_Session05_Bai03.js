"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        return `
            name: ${this.name}
            company: ${this.company}
            phone: ${this.phone}
            `;
    }
}
const employee = new Employee("huy", "huy", "0987654321");
console.log(employee.printInfo());
