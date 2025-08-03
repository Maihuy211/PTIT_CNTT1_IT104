const cocheckParity = a => {
    if (isNaN(a)) {
        return `${a} not is number`
    }else if(a%2 == 0) {
        return `${a} is an even number`
    }else{
        return `${a} is odd`
    }
}

console.log(cocheckParity("a"))
console.log(cocheckParity(10))
console.log(cocheckParity(7))
