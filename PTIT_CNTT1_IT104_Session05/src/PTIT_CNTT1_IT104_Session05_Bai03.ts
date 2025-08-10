class Employee {
    public name: string ;
    protected company: string ;
    private phone : string ;

    constructor(name: string , company : string , phone: string){
        this.name = name 
        this.company = company 
        this.phone = phone
    }
    printInfo() {
        return `
            name: ${this.name}
            company: ${this.company}
            phone: ${this.phone}
            `
    }
}
const employee = new Employee("huy" , "huy" , "0987654321")

console.log(employee.printInfo())