const sum = (...nums) => {
    return nums.map(arr => arr.reduce((sum, val) => sum + val , 0))
}
console.log(sum([1,2], [6,7,8], [12,8]))