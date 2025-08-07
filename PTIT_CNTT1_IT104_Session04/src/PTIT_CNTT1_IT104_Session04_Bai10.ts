interface Student {
    readonly studentId: string
    name: string
    email: string
    hasCompleted: boolean
    finalScore?: number // optional: chỉ có nếu học viên đã hoàn thành
}

interface Course {
    courseId: string
    title: string
    instructor: string
    students: Student[]
    isActive: boolean
}

interface CourseManager {
    schoolName: string;
    year: number;
    courses: Course[];
}

const getCompletedStudents = (course: Course): Student[] => {
    return course.students.filter(student => student.hasCompleted);
}

const calculateAverageScore = (course: Course): number | null => {
    const scoredStudents = course.students.filter(student => typeof student.finalScore === 'number');
    if (scoredStudents.length === 0){
        return null
    } 
    const totalScore = scoredStudents.reduce((sum, student) => {
        if (typeof student.finalScore === 'number') {
            return sum + student.finalScore
        } else {
            return sum
        }
    }, 0)
    return totalScore / scoredStudents.length;
}

const printCourseReport = (manager: CourseManager): void => {
    manager.courses.forEach((course, index) => {
        const completedStudents = getCompletedStudents(course);
        const avgScore = calculateAverageScore(course);
        const status = course.isActive ? "ĐANG MỞ" : "ĐÃ ĐÓNG";

        console.log(`${index + 1}.Khóa: ${course.title} (GV: ${course.instructor})`);
        console.log(`- Tổng học viên: ${course.students.length}`);
        console.log(`- Hoàn thành: ${completedStudents.length} học viên`);
        console.log(`- Trung bình điểm: ${avgScore !== null ? avgScore.toFixed(1) : "N/A"}`);
        console.log(`- Trạng thái: ${status}`);
    });
};

printCourseReport({
    schoolName: "",
    year: 2025,
    courses: [
        {
            courseId: "CNTT1",
            title: "TypeScript Cơ Bản",
            instructor: "Nguyễn Văn A",
            isActive: true,
            students: [
                { studentId: "S1", name: "Huy", email: "huy@gmail.com", hasCompleted: true, finalScore: 9 },
                { studentId: "S2", name: "An", email: "an@gmail.com", hasCompleted: true, finalScore: 8 },
                { studentId: "S3", name: "Thành", email: "thanh@gmail.com", hasCompleted: false }
            ]
        },
        {
            courseId: "CNTT1",
            title: "HTML & CSS",
            instructor: "Trần Thị B",
            isActive: false,
            students: [
                { studentId: "S4", name: "Dương", email: "duong@gmail.com", hasCompleted: false },
                { studentId: "S5", name: "Toàn", email: "toan@gmail.com", hasCompleted: false }
            ]
        }
    ]

})

