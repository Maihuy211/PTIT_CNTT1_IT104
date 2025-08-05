const typeConsole = (type='') =>{
    if(type===''){
        return `Đây là type: log`
    }else{
        return `Đây là type: ${type}`
    }
}
console.log(typeConsole("log"))
console.log(typeConsole("warn"))
console.log(typeConsole("error"))
console.log(typeConsole())