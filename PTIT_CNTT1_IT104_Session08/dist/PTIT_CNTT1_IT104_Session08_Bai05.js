"use strict";
function predicate(arr) {
    for (const item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log(predicate([1, 7, 12, 5]));
console.log(predicate([3, 5,]));
