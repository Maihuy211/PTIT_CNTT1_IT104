import {
    getStudentById,
    getTopStudents,
    getClassAverage,
    getStudentsByScoreRange,
    sortStudentsByName
} from './function.js';

class Student {
    constructor(id, name, age, scores) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
}

const studentList = [
    new Student('1', 'An', 19, [9, 8, 10]),
    new Student('2', 'huy', 18, [7, 7, 8]),
    new Student('3', 'thanh', 19 , [10, 10, 10]),
    new Student('4', 'duong', 19, [6, 5, 7]),
    new Student('5', 'bach', 19, [9, 9, 9])
]

console.log(getStudentById(studentList, "1"));
console.log(getTopStudents(studentList));
console.log(getClassAverage(studentList));
console.log(getStudentsByScoreRange(studentList, 5, 9));
console.log(sortStudentsByName(studentList));