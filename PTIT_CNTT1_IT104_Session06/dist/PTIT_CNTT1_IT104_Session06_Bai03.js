"use strict";
class Employee {
    clockIn() {
        console.log("Employee has clocked in");
    }
}
class Manager extends Employee {
    work() {
        console.log("Manager is managing the team");
    }
}
const manager = new Manager();
manager.work(); // Kết quả: Manager is managing the team
manager.clockIn(); // Kết quả: Employee has clocked in
// Abstract method
// Chỉ khai báo tên và kiểu phương thức, không có thân hàm.
// Bắt buộc các lớp con phải viết lại (override).
// Chỉ tồn tại trong abstract class.
// Method (bình thường)
// Có thân hàm (có code thực thi).
// Lớp con có thể dùng luôn hoặc ghi đè nếu muốn.
// Có thể nằm trong bất kỳ class nào (kể cả abstract class).
