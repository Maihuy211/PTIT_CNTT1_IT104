class Student {
    private id: number;
    private name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
}

class Classroom {
    students: Student[] = [];
    showStudents(): void {
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): void {
        this.students.find(student => student.getId() === id);
    }

    addStudentInClass(allStudents: Student[], studentId: number): void {
        const student = allStudents.find(s => s.getId() === studentId);
        if (student) {
            this.addStudent(student);
            const filteredStudents = allStudents.filter(s => s.getId() !== studentId);
            allStudents.length = 0;
            for (const s of filteredStudents) {
                allStudents.push(s);
            }
        } else {
            console.log("Khong tim thay hoc sinh");
        }
    }
}

const allStudents: Student[] = [
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



