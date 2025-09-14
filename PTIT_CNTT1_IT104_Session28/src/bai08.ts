type CallBackV8<T> = (array: T[]) => void;

const myFilter = <T>(arr: T[], num: T, callback: CallBackV8<T>): void => {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(arr[i]);
    }
  }
  callback(result);
};

const handleFilter = (array: number[]): void => {
  console.log(array);
};

const nums: number[] = [1, 2, 3, 4, 5, 6];

myFilter(nums, 2, handleFilter);
myFilter(nums, 10, handleFilter);
