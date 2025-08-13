function identity<T>(arg : T):T {
    return arg;
}
const check = identity<boolean>(true)
if(check){
    console.log("xin chào");
}else{
    console.log("tạm biệt");
}

