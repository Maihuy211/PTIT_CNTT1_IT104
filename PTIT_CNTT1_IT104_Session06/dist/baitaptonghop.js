"use strict";
// Lớp cha Animal
class Animal {
    constructor(name, age) {
        this.lastCareTime = null;
        this.healthStatus = "Good";
        this.name = name;
        this.age = age;
    }
    // Đóng gói age
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age >= 0)
            this.age = age;
        else
            console.log("Age không hợp lệ");
    }
    // Lấy thông tin sức khỏe
    getHealthStatus() {
        return this.healthStatus;
    }
    setHealthStatus(status) {
        this.healthStatus = status;
    }
    // Thời gian chăm sóc gần nhất
    getLastCareTime() {
        return this.lastCareTime;
    }
    setLastCareTime(time) {
        this.lastCareTime = time;
    }
}
// Mammal (động vật có vú)
class Mammal extends Animal {
    constructor(name, age, furColor) {
        super(name, age);
        this.furColor = furColor;
    }
    getFurColor() {
        return this.furColor;
    }
    setFurColor(color) {
        this.furColor = color;
    }
    move() {
        console.log(`${this.name} chạy trên bốn chân.`);
    }
    sound() {
        console.log(`${this.name} kêu “gừ gừ”`);
    }
    feed() {
        console.log(`${this.name} ăn cỏ và trái cây.`);
    }
}
// Bird (chim)
class Bird extends Animal {
    move() {
        console.log(`${this.name} bay trên bầu trời.`);
    }
    sound() {
        console.log(`${this.name} hót líu lo.`);
    }
    feed() {
        console.log(`${this.name} ăn hạt và côn trùng.`);
    }
}
// Reptile (động vật bò sát)
class Reptile extends Animal {
    constructor(name, age, venomous) {
        super(name, age);
        this.venomous = venomous;
    }
    isVenomous() {
        return this.venomous;
    }
    setVenomous(value) {
        this.venomous = value;
    }
    move() {
        console.log(`${this.name} bò trên mặt đất.`);
    }
    sound() {
        console.log(`${this.name} kêu rít hoặc im lặng.`);
    }
    feed() {
        if (this.venomous) {
            console.log(`${this.name} ăn thịt bằng cách tiêm nọc độc.`);
        }
        else {
            console.log(`${this.name} ăn thịt nhỏ và côn trùng.`);
        }
    }
}
// Lớp Zookeeper quản lý động vật
class Zookeeper {
    constructor() {
        this.animals = [];
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    careForAnimal(animal) {
        console.log(`Đang chăm sóc cho ${animal['name']}...`);
        // Cập nhật thời gian chăm sóc
        animal.setLastCareTime(new Date());
        // Giả sử kiểm tra sức khỏe đơn giản
        animal.setHealthStatus("Healthy");
        console.log(`${animal['name']} đã được tắm và kiểm tra sức khỏe.`);
    }
    feedAnimal(animal) {
        console.log(`Cho ${animal['name']} ăn:`);
        animal.feed();
    }
    report(animal) {
        console.log(`---- Báo cáo tình trạng của ${animal['name']} ----`);
        console.log(`Tuổi: ${animal.getAge()}`);
        console.log(`Tình trạng sức khỏe: ${animal.getHealthStatus()}`);
        console.log(`Thời gian chăm sóc gần nhất: ${animal.getLastCareTime()}`);
        console.log(`Hành vi ăn uống:`);
        animal.feed();
        console.log(`Hành vi di chuyển:`);
        animal.move();
        console.log(`Âm thanh:`);
        animal.sound();
        console.log(`--------------------------------------------`);
    }
}
// Demo sử dụng
const animals = [
    new Mammal("Hổ", 5, "Cam"),
    new Bird("Chim sẻ", 2),
    new Reptile("Rắn độc", 3, true),
];
const keeper = new Zookeeper();
// Thêm động vật vào sở thú
animals.forEach(animal => keeper.addAnimal(animal));
// Duyệt mảng gọi move() và sound()
for (const animal of animals) {
    animal.move();
    animal.sound();
}
// Chăm sóc, cho ăn và báo cáo
for (const animal of animals) {
    keeper.careForAnimal(animal);
    keeper.feedAnimal(animal);
    keeper.report(animal);
}
