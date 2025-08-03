const average = (score) => {
    let total = score.reduce((sum, score) => sum + score, 0);
    let result = total / score.length;
    return result;
};

export const getStudentById = (studentList, id) => {
    return studentList.find(student => student.id === id);
};

export const getTopStudents = (studentList) => {
    let maxAvg = average(studentList[0].scores);
    let topStudents = [studentList[0]];

    for (let i = 1; i < studentList.length; i++) {
        const avg = average(studentList[i].scores);

        if (avg > maxAvg) {
            maxAvg = avg;
            topStudents = [studentList[i]];
        } else if (avg === maxAvg) {
            topStudents.push(studentList[i]);
        }
    }

    return topStudents;
};

export const getClassAverage = (studentList) => {
    let total = studentList.reduce((sum, student) => sum + average(student.scores), 0);
    let result = total / studentList.length;
    return result;
};

export const getStudentsByScoreRange = (studentList, min, max) => {
    return studentList.filter(student => {
        const avg = average(student.scores);
        return avg >= min && avg <= max;
    });
};

export const sortStudentsByName = (studentList) => {
    return [...studentList].sort((a, b) => a.name.localeCompare(b.name));
};

