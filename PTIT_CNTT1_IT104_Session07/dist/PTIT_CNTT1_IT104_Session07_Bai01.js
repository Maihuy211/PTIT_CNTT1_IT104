"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name : ${this.name} - company: ${this.company} - ${this.phone}`);
    }
    getPhone() {
        return this.phone;
    }
    setPhone(newphone) {
        this.phone = String(newphone);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}
const manager = new Manager("huy", "cty huy", "09876543", 3);
console.log(manager);
