"use strict";
const show = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
show({
    name: "huy",
    age: 18,
    email: "huy@gmail.com"
});
