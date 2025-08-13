abstract class Person {
    name: string ;
    constructor(name : string){
        this.name = name
    }
    displayInfo():void {
        console.log(`Name : ${this.name}`)
    }
}
class Student extends Person {
    id : number 
    constructor(name : string , id : number){
        super(name)
        this.id = id
    }
    displayInfo():void {
        console.log(`Name : ${this.name}`);  
        console.log(`id: ${this.id}`)
    }    
}
const newStudent = new Student("huy" , 1)
console.log("hoc sinh moi: ")
newStudent.displayInfo();
class Teacher extends Person {
    subject : string 
    constructor(name : string , subject : string ){
        super(name)
        this.subject = subject
    }
    displayInfo():void {
        console.log(`Name : ${this.name}`);  
        console.log(`subject: ${this.subject}`)
    }    
}
const newTeacher = new Teacher("huy" , "CNTT1")
console.log("giao vien moi: ")
newTeacher.displayInfo();


