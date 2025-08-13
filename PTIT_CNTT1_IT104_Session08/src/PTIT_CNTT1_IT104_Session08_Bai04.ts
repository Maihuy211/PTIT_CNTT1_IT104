function merge<T,U>(a: T , b: U): T & U {
    return {...a , ...b}
}

interface Work {
    job: string;
}

interface Employee {
    name: string;
    age: number;
}

const work: Work = { job: "developer"};
const employee: Employee = { name: "huy", age: 19 };

console.log(merge(work,employee));
 