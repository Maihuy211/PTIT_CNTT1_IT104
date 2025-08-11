interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}
class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
    }

    calculatePerimeter(): number {
        return 3.14 *  2 * this.radius;
    }
}
class Rectangle1 implements Geometry {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle1(21, 10);

console.log(`Chu vi hinh tron: ${circle.calculateArea().toFixed(2)}`);
console.log(`Dien tich hinh tron: ${circle.calculatePerimeter().toFixed(2)}`);

console.log(`Chu vi hinh chu nhat: ${rectangle.calculateArea()}`);
console.log(`Dien tich hinh chu nhat: ${rectangle.calculatePerimeter()}`);
