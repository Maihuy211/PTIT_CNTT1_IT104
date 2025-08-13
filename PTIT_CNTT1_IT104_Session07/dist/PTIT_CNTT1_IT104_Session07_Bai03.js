"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meow meow");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("rau rau");
    }
}
const meo = new Cat("huy");
meo.printName();
meo.makeNoise();
const dog = new Dog("an");
dog.printName();
dog.makeNoise();
