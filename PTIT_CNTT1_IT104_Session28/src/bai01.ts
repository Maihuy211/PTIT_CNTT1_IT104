type callBackV1 = (result: number) => void;
const calculate = (a: number, b: number, callback: callBackV1) => {
  const sum = a + b;
  callback(sum);
};
const callback = (result: number): void => {
  console.log(result);
};
calculate(21, 10, callback);
