type CallBackV3<T> = (value: T, index: number) => void;

const processArray = <T>(arr: T[], callback: CallBackV3<T>): void => {
  arr.forEach((value, index) => {
    setTimeout(
      () => {
        callback(value, index);
      },
      (index + 1) * 1000
    );
  });
};

const handleLogArr = <T>(value: T, index: number) => {
  console.log(`phần tử thứ: ${index + 1}`);
};

processArray([1, 2, 3, 4, 5], handleLogArr);
