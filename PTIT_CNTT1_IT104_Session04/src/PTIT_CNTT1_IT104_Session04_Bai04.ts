const handleUnionType = (a: string  | number) => {
    if(typeof a == "string"){
        let result = a.length 
        console.log(`${result} kí tự `)
    }else if(typeof a == "number"){
        if(a%2===0){
            console.log("Đây là số chẵn");
        }else{
            console.log("Đây là số lẻ");
        }
    }
}
handleUnionType("demo123")
handleUnionType(10);