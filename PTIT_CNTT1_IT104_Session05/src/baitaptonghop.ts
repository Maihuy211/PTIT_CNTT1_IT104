class Animal {
    private name: string ;
    protected age: number ; 
    public species : string ; 

    constructor(name : string , age : number , species : string){
        this.name = name 
        this.age = age 
        this.species = species 
    }

    get getName(): string {
        return this.name;
    } 

    set setName(newName : string) {
        this.name = newName 
    }
    
    get getAge(): number {
        return this.age
    }

    set setAge(newAge : number) {
        this.age = newAge
    }
    
    get getSpecies(): string {
        return this.species
    }

    set setSpecies(newSpecies: string){
        this.species = newSpecies
    }

    speak(): void {
        console.log("Animal sound")
    }

}


class Dog extends Animal {
    public breed : string ;
    constructor(name : string , age : number , species : string , breed : string){
        super(name, age, species);
        this.breed = breed 
    }
    speak(): void {
        console.log("gâu")
    }
}

class Cat extends Animal {
    public breed : string ;
    constructor(name : string , age : number , species : string , breed : string){
        super(name, age, species);
        this.breed = breed 
    }
    speak(): void {
        console.log("meow")
    }
}

class Rabbit extends Animal {
    public breed : string ;
    constructor(name : string , age : number , species : string , breed : string){
        super(name, age, species);
        this.breed = breed 
    }
    speak(): void {
        console.log("thỏ thỏ ")
    }
}

const dog = new Dog("Micky" , 10 , "Dog" , "Husky" )
dog.setName = " trong an"

console.log(dog)


