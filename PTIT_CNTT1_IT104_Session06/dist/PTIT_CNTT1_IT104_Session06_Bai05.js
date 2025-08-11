"use strict";
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp() {
        this.speed += 21;
        console.log(`tốc độ tăng ${this.speed}`);
    }
    slowDown() {
        this.speed -= 21;
        console.log(`tốc độ giảm ${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`tốc động = 0 dừng!!!`);
    }
    getSpeed() {
        return this.speed;
    }
}
const vehicle = new Vehicle();
vehicle.speedUp();
vehicle.speedUp();
vehicle.slowDown();
vehicle.stop();
