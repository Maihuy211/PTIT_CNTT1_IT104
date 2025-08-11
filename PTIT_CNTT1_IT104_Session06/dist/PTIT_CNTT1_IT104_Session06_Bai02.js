"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Job: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(workingHour) {
        super("Partime");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const parttime = new ParttimeJob(21);
const fulltime = new FulltimeJob();
parttime.printType();
console.log(`Salary: ${parttime.calculateSalary()} VND`);
fulltime.printType();
console.log(`Salary: ${fulltime.calculateSalary()} VND`);
