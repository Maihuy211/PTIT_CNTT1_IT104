class Rectangle {

    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    getWidth(): number {
        return this.width;
    }
    setWidth(width: number): void {
        this.width = width;
    }
    getHeight(): number {
        return this.height;
    }
    setHeight(height: number): void {
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
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
