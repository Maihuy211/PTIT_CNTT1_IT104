class Vehicle {
    name: string
    age : number 
    company : string

    constructor(name : string , age : number , company : string){
        this.name = name
        this.age = age
        this.company = company
    }
    print() {
        return `
             tên: ${this.name} 
             năm sản xuất: ${this.age}
             hãng xe: ${this.company}
            `
    }
}

const vehicle1 = new Vehicle("meo",2018,"honda")
const vehicle2 = new Vehicle("gau",2030,"suzuki")

console.log(vehicle1.print())
console.log(vehicle2.print())

