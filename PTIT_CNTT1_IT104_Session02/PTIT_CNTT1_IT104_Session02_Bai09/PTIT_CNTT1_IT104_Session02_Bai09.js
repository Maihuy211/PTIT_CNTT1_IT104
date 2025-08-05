const student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }
    ]
}

const getStudentSummary = (student) => {
    let total = student.listMonhoc.reduce((a, b) => a + b.score, 0);
    let result = total / student.listMonhoc.length;
    let avg = ''
    if (result >= 8.5) {
        avg = `Học sinh giỏi`
    } else if (result >= 7) {
        avg =  `Học sinh khá`
    }
    else if (result >= 5) {
        avg =  `Học sinh trung bình`
    } else {
        avg  = `Học sinh yếu`
    }
    
    let max = student.listMonhoc[0]
    let min = student.listMonhoc[0]

    for(let i of student.listMonhoc){
        if(i.score > max.score){
            max = i;
        }
        if(i.score < min.score){
            min = i;
        }
    }
    return `
    ${student.name} is ${student.age} year old.
    Average score: ${result} -> ${avg}
    Best subject: ${max.subject} (${max.score})
    Weakest subject: ${min.subject} (${min.score})
    `
}
console.log(getStudentSummary(student))