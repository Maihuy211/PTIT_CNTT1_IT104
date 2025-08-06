let input: string = "banana";
let resultStr: string = "";

for (let i = 0; i < input.length; i++) {
    let e = input.charAt(i);
    if (!resultStr.includes(e)) {
        resultStr += e;
    }
}

console.log(resultStr); 