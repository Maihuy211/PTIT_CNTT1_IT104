abstract class Shape {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): void {
        console.log(`name:${this.name}`);
    }
    abstract getSize(): void;
}
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name); 
        this.width = width;
        this.height = height;
    }
    getSize(): void {
        let result = String(this.width * this.height);
        console.log(`width: ${this.width} - height: ${this.height}`);
        console.log("area = " + result);
    }
}
const a = new Rectangle("Meo", 21, 10);
a.getName();
a.getSize(); 
 
