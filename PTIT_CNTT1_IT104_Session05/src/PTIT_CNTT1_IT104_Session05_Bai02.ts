class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string,){
        this.id = id
        this.age = age
        this.email =email
    } 
    print() {
        return `
             id: ${this.id} 
             tuổi: ${this.age}
             email: ${this.email}
            `
    }
}
const student1 = new Student(1,19,"huy@gmail.com")
const student2 = new Student(2,19,"an@gmail.com")
const student3 = new Student(3,19,"thanh@gmail.com")

const arr :Student[] = []

arr.push(student1)
arr.push(student2)
arr.push(student3)

arr.forEach(student =>{
    console.log(student.print());
})