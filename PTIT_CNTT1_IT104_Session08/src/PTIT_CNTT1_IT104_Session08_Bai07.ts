function flatten2<T>(arr: T[][]): T[] {
    const result: T[] = [];
    for (const subArr of arr) {
        for (const item of subArr) {
            result.push(item);
        }
    }
    return result;
}

console.log(flatten2([[1, 2], [3, 4], [5, 6]]));
console.log(flatten2([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));