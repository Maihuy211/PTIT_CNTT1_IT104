type CallBackV4 = (value: number) => void;

const displayNumbers = (delay: number, callBack: CallBackV4) => {
  let count: number = 1;

  setInterval((): void => {
    callBack(count);
    count++;
  }, delay);
};

const handleLogNumber = (value: number) => {
  console.log(`Số thứ tự: ${value}`);
};

displayNumbers(1000, handleLogNumber);
