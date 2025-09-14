type callBackv2 = (t: number) => void;

const delayedCallback = (ms: number, callBack: callBackv2) => {
  setTimeout(() => {
    callBack(ms);
  }, ms);
};

const callBack = (t: number) => {
  console.log(t);
};

delayedCallback(1000, callBack);
