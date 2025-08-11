abstract class Job {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
    printType(): void {
        console.log(`Job: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
    workingHour: number;
    constructor(workingHour: number) {
        super("Partime");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary(): number {
        return 10000000;
    }
}
const parttime = new ParttimeJob(21); 
const fulltime = new FulltimeJob();

parttime.printType();
console.log(`Salary: ${parttime.calculateSalary()} VND`);

fulltime.printType();
console.log(`Salary: ${fulltime.calculateSalary()} VND`);
