type Task = () => void;

const task1: Task = () => {
  console.log("Task 1 được thực thi");
};

const task2: Task = () => {
  console.log("Task 2 được thực thi");
};

const task3: Task = () => {
  console.log("Task 3 được thực thi! Hoàn thành");
};

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const runTask = async (): Promise<void> => {
  await delay(1000);
  task1();
  await delay(1500);
  task2();
  await delay(2000);
  task3();
};

runTask();
