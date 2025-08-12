class Employee {
    public name : string 
    protected company : string 
    private phone : string 
    constructor(name : string , company : string , phone : string){
        this.name = name;
        this.company = company ;
        this.phone = phone ;
    }
    printInfo():void {
        console.log(`Name : ${this.name} - company: ${this.company} - ${this.phone}`);      
    }
    getPhone():string {
        return this.phone 
    }
    setPhone(newphone : number ):void {
        this.phone = String(newphone)
    }
}
class Manager extends Employee {
    teamSize : number 
    constructor(name : string , company : string , phone : string,teamSize : number){
        super(name,company,phone);
        this.teamSize = teamSize   
    }
}
const manager = new Manager("huy","cty huy","09876543",3)
console.log(manager);

