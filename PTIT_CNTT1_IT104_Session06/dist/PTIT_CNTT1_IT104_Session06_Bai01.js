"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`name:${this.name}`);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        let result = String(this.width * this.height);
        console.log(`width: ${this.width} - height: ${this.height}`);
        console.log("area = " + result);
    }
}
const a = new Rectangle("Meo", 21, 10);
a.getName();
a.getSize();
