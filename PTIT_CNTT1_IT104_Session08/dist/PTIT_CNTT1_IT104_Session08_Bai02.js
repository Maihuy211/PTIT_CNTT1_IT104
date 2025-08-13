"use strict";
function identity(arg) {
    return arg;
}
const check = identity(true);
if (check) {
    console.log("xin chào");
}
else {
    console.log("tạm biệt");
}
