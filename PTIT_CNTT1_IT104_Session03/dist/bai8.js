"use strict";
const add = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA + numB;
};
const subtract = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA - numB;
};
const multiply = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA * numB;
};
const divide = (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) {
        return "không hợp lệ";
    }
    return numA / numB;
};
console.log(add("10", 21));
console.log(subtract("a", 10));
console.log(multiply(21, "10"));
console.log(divide("21", "a"));
