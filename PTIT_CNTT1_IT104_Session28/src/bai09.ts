type CallBackV9 = (array: number[]) => void;

const myMap = (arr: number[], callback: CallBackV9): void => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const doubled = arr[i] * 2;
    result.push(doubled);
  }
  callback(result);
};

const handleMap = (array: number[]): void => {
  console.log(array);
};

const arrNum: number[] = [1, 2, 3, 4, 5, 6];

myMap(arrNum, handleMap);
