type callBackV7<T> = (element: T, index: number, array: T[]) => void;

const myForEach = <T>(arr: T[], callback: callBackV7<T>): void => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const handleLogArray = (
  element: number,
  index: number,
  array: number[]
): void => {
  console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
};

myForEach(numbers, handleLogArray);
