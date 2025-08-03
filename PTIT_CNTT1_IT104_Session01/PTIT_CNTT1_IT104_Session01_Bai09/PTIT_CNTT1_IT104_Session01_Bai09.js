const arr = (arr1 , arr2 ) => {
    const merge = [ ...arr1 , ...arr2]
    return merge.sort((a,b) => a - b) 
}

console.log(arr([1, 2, 3, 5, 9], [4, 6, 7, 8]))