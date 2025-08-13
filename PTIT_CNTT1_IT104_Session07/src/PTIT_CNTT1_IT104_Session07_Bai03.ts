abstract class Animal {
    name : string ;
    constructor(name: string ){
        this.name = name 
    }
    abstract makeNoise():void ;
    printName():void {
        console.log(`${this.name}`)
    }
}
class Cat extends Animal {
    makeNoise():void {
        console.log("meow meow");     
    }
}
class Dog extends Animal {
    makeNoise():void {
        console.log("rau rau");     
    }
}
const meo = new Cat("huy")
meo.printName() 
meo.makeNoise()

const dog = new Dog("an")
dog.printName() 
dog.makeNoise()