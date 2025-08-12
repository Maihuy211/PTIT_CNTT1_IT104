"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name : ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Name : ${this.name}`);
        console.log(`id: ${this.id}`);
    }
}
const newStudent = new Student("huy", 1);
console.log("hoc sinh moi: ");
newStudent.displayInfo();
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Name : ${this.name}`);
        console.log(`subject: ${this.subject}`);
    }
}
const newTeacher = new Teacher("huy", "CNTT1");
console.log("giao vien moi: ");
newTeacher.displayInfo();
