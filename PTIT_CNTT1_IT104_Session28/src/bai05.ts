type CallBackV5 = (result: boolean) => void;


const checkCondition = (check: boolean, callback: CallBackV5): void => {
  setTimeout((): void => {
    callback(check);
  }, 1000);
};

const display = (result: boolean): void => {
  console.log(`Điều kiện trả về: ${result}`);
};

checkCondition(true, display); 
checkCondition(false, display); 
