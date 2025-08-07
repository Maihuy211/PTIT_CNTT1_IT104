"use strict";
const students = [];
// hàm thêm sinh viên
const createStudent = (student) => {
    students.push(student);
};
// hàm cập nhật sinh viên
const updateStudent = (id, newStudent) => {
    // tìm kiếm sinh viên theo id
    const find = students.findIndex((e) => e.id === id);
    if (find === -1) {
        console.log("Không tìm thấy sinh vien");
    }
    else {
        // cap nhat thong tim moi thoi
        students[find].name = newStudent.name;
        students[find].age = newStudent.age;
        students[find].subjects = newStudent.subjects;
    }
};
// hàm xoá sinh viên
const deleteStudent = (id) => {
    const find = students.findIndex((e) => e.id === id);
    if (find === -1) {
        console.log("Không tìm thấy sinh vien");
    }
    else {
        students.splice(find, 1);
    }
};
// ap dung type guard để kiểm tra kiểu dữ liệu 
const isNumber = (score) => {
    return typeof score === "number";
};
// chuyen doi thanh so 
const converScoreToNumber = (score) => {
    const scoreMap = {
        "A": 10,
        "B": 8,
        "C": 6,
        "D": 4
    };
    return scoreMap[score];
};
// tinh diem trug binh cua sinh vien 
const avg = (student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            return sum + subject.score;
        }
        else {
            return sum + converScoreToNumber(subject.score);
        }
    }, 0);
    return total / student.subjects.length;
};
const classifyStudent = (student) => {
    const average = avg(student);
    if (average >= 8.5) {
        return "Giỏi";
    }
    else if (average >= 6.5) {
        return "Khá";
    }
    else if (average >= 5) {
        return "Trung bình";
    }
    else {
        return "Yếu";
    }
};
// tao du lieu demo 
avg({
    id: 1,
    name: "Nguyen van A",
    age: "20",
    subjects: [
        {
            score: 10,
            subjectName: "Toán"
        },
        {
            score: 10,
            subjectName: "Văn"
        },
        {
            score: 10,
            subjectName: "Anh"
        }
    ]
});
