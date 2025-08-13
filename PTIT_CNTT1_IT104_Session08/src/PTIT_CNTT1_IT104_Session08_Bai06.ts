function findElement<T>(arr: T[], value: T): T | undefined {
    for (const item of arr) {
        if (item === value) {
            return item; 
        }
    }
    return undefined; 
}

console.log(findElement([1, 2, 3, 4], 3));          
console.log(findElement([1, 2, 3], 5));      
