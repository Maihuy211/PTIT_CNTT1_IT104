const processInput = (input: string | number | boolean) => {
    if (typeof input === "string") {
        if (Number(input) > 0) {
            return Number(input) ** 2;
        } else {
            let count = 0;
            for (let i = 0; i < input.length; i++) {
                let char = input[i];
                if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                    count++;
                }
            }
            return count + " ký tự chữ cái";
        }
    } else if (typeof input === "number") {
        for (let i = 2; i <= Math.sqrt(input); i++) {
            if (input % i === 0) {
                return "không phải số nguyên tố";
            }
        }
        return "là số nguyên tố";
    } else if (typeof input === "boolean") {
        if (input === true) {
            return "giá trị true -> tiến hành xử lý";
        } else {
            return "giá trị false -> dừng xử lý";
        }
    }
};

console.log(processInput("123"));  
console.log(processInput("abc123!"));     
console.log(processInput(7));
console.log(processInput(10)); 
console.log(processInput(true));  
console.log(processInput(false));      
