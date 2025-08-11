"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return 3.14 * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 3.14 * 2 * this.radius;
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle1(21, 10);
console.log(`Chu vi hinh tron: ${circle.calculateArea().toFixed(2)}`);
console.log(`Dien tich hinh tron: ${circle.calculatePerimeter().toFixed(2)}`);
console.log(`Chu vi hinh chu nhat: ${rectangle.calculateArea()}`);
console.log(`Dien tich hinh chu nhat: ${rectangle.calculatePerimeter()}`);
