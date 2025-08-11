interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}
class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor() {
        this.speed = 0; 
    }
    speedUp(): void {
        this.speed += 21;
        console.log(`tốc độ tăng ${this.speed}`);
    }
    slowDown(): void {
        this.speed -= 21;
        console.log(`tốc độ giảm ${this.speed}`);
    }
    stop(): void {
        this.speed = 0;
        console.log(`tốc động = 0 dừng!!!`);
    }
    getSpeed(): number {
        return this.speed;
    }
}
const vehicle = new Vehicle();

vehicle.speedUp();  
vehicle.speedUp(); 
vehicle.slowDown();
vehicle.stop();      
