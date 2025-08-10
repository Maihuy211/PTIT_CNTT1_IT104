"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rectangle = new Rectangle(25, 11);
console.log("Chiều rộng:", rectangle.getWidth());
console.log("Chiều dài:", rectangle.getHeight());
console.log("Chu vi:", rectangle.getPerimeter());
console.log("Diện tích:", rectangle.getArea());
rectangle.setWidth(21);
rectangle.setHeight(10);
console.log("Sau khi cập nhật:");
console.log("Chiều rộng:", rectangle.getWidth());
console.log("Chiều dài:", rectangle.getHeight());
console.log("Chu vi:", rectangle.getPerimeter());
console.log("Diện tích:", rectangle.getArea());
