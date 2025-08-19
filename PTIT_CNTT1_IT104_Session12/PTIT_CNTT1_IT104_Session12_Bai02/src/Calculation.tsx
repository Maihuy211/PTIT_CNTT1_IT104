import './App.css'

const total = (a:number,b:number):number => {
    return a+b;
}
const subtract  = (a:number,b:number):number => {
    return a-b;
}
const multiply  = (a:number,b:number):number => {
    return a*b;
}
const divide  = (a:number,b:number):number => {
    return a/b;
}
const a = 21;
const b = 10;
const Calculation = () => {
    return (
        <div>
            <h4>Danh sach ket qua</h4>
            <ul>
                <li>{a} + {b} = {total(a,b)}</li>
                <li>{a} - {b} = {subtract(a,b)}</li>
                <li>{a} * {b} = {multiply(a,b)}</li>
                <li>{a} / {b} = {divide(a,b)}</li>
            </ul>
        </div>
    );
}
export default Calculation;