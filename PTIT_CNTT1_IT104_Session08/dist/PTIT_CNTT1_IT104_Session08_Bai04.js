"use strict";
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const work = { job: "developer" };
const employee = { name: "huy", age: 19 };
console.log(merge(work, employee));
