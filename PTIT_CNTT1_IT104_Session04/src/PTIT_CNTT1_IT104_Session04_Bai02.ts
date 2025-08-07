let num:number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
let total:number=0;
for(let i = 0 ; i < num.length ; i++){
   total+=num[i]
}
let result = total / num.length

console.log(result.toFixed(2))

