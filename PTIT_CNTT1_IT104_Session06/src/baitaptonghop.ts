// Interface mô tả hành vi ăn uống
interface FeedingBehavior {
    feed(): void;
}

// Lớp cha Animal
abstract class Animal implements FeedingBehavior {
    protected name: string;
    private age: number;
    private lastCareTime: Date | null = null;
    private healthStatus: string = "Good";

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Đóng gói age
    getAge(): number {
        return this.age;
    }
    setAge(age: number): void {
        if (age >= 0) this.age = age;
        else console.log("Age không hợp lệ");
    }

    // Lấy thông tin sức khỏe
    getHealthStatus(): string {
        return this.healthStatus;
    }
    setHealthStatus(status: string): void {
        this.healthStatus = status;
    }

    // Thời gian chăm sóc gần nhất
    getLastCareTime(): Date | null {
        return this.lastCareTime;
    }
    setLastCareTime(time: Date): void {
        this.lastCareTime = time;
    }

    abstract move(): void;
    abstract sound(): void;

    // Interface FeedingBehavior
    abstract feed(): void;
}

// Mammal (động vật có vú)
class Mammal extends Animal {
    private furColor: string;

    constructor(name: string, age: number, furColor: string) {
        super(name, age);
        this.furColor = furColor;
    }

    getFurColor(): string {
        return this.furColor;
    }
    setFurColor(color: string): void {
        this.furColor = color;
    }

    move(): void {
        console.log(`${this.name} chạy trên bốn chân.`);
    }

    sound(): void {
        console.log(`${this.name} kêu “gừ gừ”`);
    }

    feed(): void {
        console.log(`${this.name} ăn cỏ và trái cây.`);
    }
}

// Bird (chim)
class Bird extends Animal {
    move(): void {
        console.log(`${this.name} bay trên bầu trời.`);
    }
    sound(): void {
        console.log(`${this.name} hót líu lo.`);
    }
    feed(): void {
        console.log(`${this.name} ăn hạt và côn trùng.`);
    }
}

// Reptile (động vật bò sát)
class Reptile extends Animal {
    private venomous: boolean;

    constructor(name: string, age: number, venomous: boolean) {
        super(name, age);
        this.venomous = venomous;
    }

    isVenomous(): boolean {
        return this.venomous;
    }
    setVenomous(value: boolean): void {
        this.venomous = value;
    }

    move(): void {
        console.log(`${this.name} bò trên mặt đất.`);
    }

    sound(): void {
        console.log(`${this.name} kêu rít hoặc im lặng.`);
    }

    feed(): void {
        if (this.venomous) {
            console.log(`${this.name} ăn thịt bằng cách tiêm nọc độc.`);
        } else {
            console.log(`${this.name} ăn thịt nhỏ và côn trùng.`);
        }
    }
}

// Lớp Zookeeper quản lý động vật
class Zookeeper {
    private animals: Animal[] = [];

    addAnimal(animal: Animal): void {
        this.animals.push(animal);
    }

    careForAnimal(animal: Animal): void {
        console.log(`Đang chăm sóc cho ${animal['name']}...`);
        // Cập nhật thời gian chăm sóc
        animal.setLastCareTime(new Date());
        // Giả sử kiểm tra sức khỏe đơn giản
        animal.setHealthStatus("Healthy");
        console.log(`${animal['name']} đã được tắm và kiểm tra sức khỏe.`);
    }

    feedAnimal(animal: Animal): void {
        console.log(`Cho ${animal['name']} ăn:`);
        animal.feed();
    }

    report(animal: Animal): void {
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
const animals: Animal[] = [
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
