"use strict";
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
    get getAge() {
        return this.age;
    }
    set setAge(newAge) {
        this.age = newAge;
    }
    get getSpecies() {
        return this.species;
    }
    set setSpecies(newSpecies) {
        this.species = newSpecies;
    }
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("gâu");
    }
}
class Cat extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("meow");
    }
}
class Rabbit extends Animal {
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log("thỏ thỏ ");
    }
}
const dog = new Dog("Micky", 10, "Dog", "Husky");
dog.setName = " trong an";
console.log(dog);
