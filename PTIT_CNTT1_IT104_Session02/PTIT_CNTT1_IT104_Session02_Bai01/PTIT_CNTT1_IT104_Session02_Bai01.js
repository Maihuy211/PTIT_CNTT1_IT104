const sum = (arr) => {
    let total = 0;
    for(let i of arr){
        if(i%2===0){
            total+=i;
        }
    }
    return total
}

console.log(sum([1, 2, 3, 4, 5, 6]))