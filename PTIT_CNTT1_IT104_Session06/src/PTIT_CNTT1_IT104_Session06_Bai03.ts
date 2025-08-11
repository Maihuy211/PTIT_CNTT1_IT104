abstract class Employee {
    abstract work(): void; 
    clockIn(): void {
        console.log("10 + ");
    }
}
class Manager extends Employee {
    work(): void {
        console.log("code");
    }
}

const manager = new Manager();
manager.work();     // Kết quả: 10 +
manager.clockIn();  // Kết quả: code

// Abstract method
// Chỉ khai báo tên và kiểu phương thức, không có thân hàm.
// Bắt buộc các lớp con phải viết lại (override).
// Chỉ tồn tại trong abstract class.

// Method (bình thường)
// Có thân hàm (có code thực thi).
// Lớp con có thể dùng luôn hoặc ghi đè nếu muốn.
// Có thể nằm trong bất kỳ class nào (kể cả abstract class).