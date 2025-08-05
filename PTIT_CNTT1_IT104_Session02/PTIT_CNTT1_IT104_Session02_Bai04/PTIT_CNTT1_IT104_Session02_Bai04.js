const checkElement = (arr,val) =>{
    for(let i of arr){
        if(i===val){
            return true
        }
    }
    return false
}
console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));
