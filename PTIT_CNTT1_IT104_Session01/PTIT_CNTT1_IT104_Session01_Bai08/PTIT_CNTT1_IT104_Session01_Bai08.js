const arr = (arr1 , arr2 , pos) => {
    if(pos < 0 || pos > arr1.length){
        console.log("vi tri khong hop le")
        return
    }
    const result = [
        ...arr1.slice(0, pos) , 
        ...arr2 , 
        ...arr1.slice(pos)
    ]
    return result
}

console.log(arr([1,2,3,7,8], [4,5,6], 3))
console.log(arr(['a', 'b', 'e', 'f'], ['c','d'], 2))


