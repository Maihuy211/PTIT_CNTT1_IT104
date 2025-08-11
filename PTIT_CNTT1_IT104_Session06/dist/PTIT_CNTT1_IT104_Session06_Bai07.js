"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }
    addStudent(student) {
        this.students.push(student);
    }
    filterStudent(id) {
        this.students.find(student => student.getId() === id);
    }
    addStudentInClass(allStudents, studentId) {
        const student = allStudents.find(s => s.getId() === studentId);
        if (student) {
            this.addStudent(student);
            const filteredStudents = allStudents.filter(s => s.getId() !== studentId);
            allStudents.length = 0;
            for (const s of filteredStudents) {
                allStudents.push(s);
            }
        }
        else {
            console.log("Khong tim thay hoc sinh");
        }
    }
}
const allStudents = [
    new Student(1, "huy"),
    new Student(2, "an"),
    new Student(3, "thanh"),
    new Student(4, "bach"),
    new Student(5, "duong"),
    new Student(6, "toan"),
];
const class1 = new Classroom();
const class2 = new Classroom();
class1.addStudentInClass(allStudents, 1);
class1.addStudentInClass(allStudents, 2);
class1.addStudentInClass(allStudents, 3);
class2.addStudentInClass(allStudents, 4);
class2.addStudentInClass(allStudents, 5);
class2.addStudentInClass(allStudents, 6);
console.log("Lớp 1:");
class1.showStudents();
console.log("Lớp 2:");
class2.showStudents();
