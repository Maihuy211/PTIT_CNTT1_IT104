"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed) {
        return this.speed -= speed;
    }
    speedUp(speed) {
        return this.speed += speed;
    }
    showSpeed() {
        console.log(`tốc độ hiện tại : ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bicycle = new Bicycle("meo", 60, 1, 4);
bicycle.showSpeed();
console.log("tốc độ giảm: 10");
bicycle.slowDown(10);
bicycle.showSpeed();
console.log("tốc độ tăng: 30");
bicycle.speedUp(40);
bicycle.showSpeed();
