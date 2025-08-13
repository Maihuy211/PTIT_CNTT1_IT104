"use strict";
function flatten(arr) {
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = [...result, ...flatten(item)];
        }
        else {
            result = [...result, item];
        }
    }
    return result;
}
console.log(flatten([1, [2, [3, 4], 5], 6]));
