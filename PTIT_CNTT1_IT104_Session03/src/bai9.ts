const addNumber  = (a: number | string, b: number | string): number | string => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA + numB;
}

const subtractNumber = (a: number | string, b: number | string): number | string => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA - numB;
}

const multiplyNumber = (a: number | string, b: number | string): number | string => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
        return "không hợp lệ";
    }
    return numA * numB;
}

const divideNumber = (a: number | string, b: number | string): number | string => {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) {
        return "không hợp lệ";
    }
    return numA / numB;
}

const factorialNumber = (n: number | string): number | string => {
    const num = Number(n);
    if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
        return "không hợp lệ";
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const power = (base: number | string, exponent: number | string): number | string => {
    const numBase = Number(base);
    const numExponent = Number(exponent);
    if (isNaN(numBase) || isNaN(numExponent)) {
        return "không hợp lệ";
    }
    return Math.pow(numBase, numExponent);
}

const root = (value: number | string, n: number | string): number | string => {
    const numValue = Number(value);
    const numN = Number(n);
    if (isNaN(numValue) || isNaN(numN) || numN === 0) {
        return "không hợp lệ";
    }
    return Math.pow(numValue, 1 / numN);
}


const setResult = (value) => {
    document.getElementById("result").textContent = String(value);
};

function btnAdd() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(addNumber(a, b));
}

function btnSubtract() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(subtractNumber(a, b));
}

function btnMultiply() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(multiplyNumber(a, b));
}

function btnDivide() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(divideNumber(a, b));
}

function btnPower() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(power(a, b));
}

function btnRoot() {
    const a = document.getElementById("input1").value;
    const b = document.getElementById("input2").value;
    setResult(root(a, b));
}

function btnFactorial() {
    const a = document.getElementById("input1").value;
    setResult(factorialNumber(a));
}