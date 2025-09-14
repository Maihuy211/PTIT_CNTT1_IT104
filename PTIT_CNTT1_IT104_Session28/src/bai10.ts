type callBackV10 = () => void;

// hàm thêm công việc
const addTask = (
  nameTask: string,
  tasks: string[],
  callback: callBackV10
): void => {
  if (tasks.includes(nameTask)) {
    console.log(`Công việc này đã tồn tại`);
  } else {
    tasks.push(nameTask);
    callback();
  }
};

// Hàm xóa công việc
const deleteTask = (nameTask: string,tasks: string[],callback: callBackV10): string[] => {
  if (!tasks.includes(nameTask)) {
    console.log(`Công việc không tồn tại `);
    return tasks; 
  }

  const newTasks = tasks.filter((task) => task !== nameTask);
  callback();
  return newTasks; 
}

// Hàm hiển thị công việc
const displayTasks = (tasks: string[]): void => {
  if (tasks.length === 0) {
    console.log("Danh sách công việc trống");
  } else {
    console.log("Danh sách công việc:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};

const handleAdd = () : void => {
  console.log("công việc đã được thêm thành công");
};

const handleDelete = () : void => {
  console.log("công việc đã được xóa thành công");
};

let myTasks: string[] = [];

addTask("ngủ", myTasks, handleAdd);
addTask("ăn", myTasks, handleAdd);
addTask("đi chơi", myTasks, handleAdd);

displayTasks(myTasks);

myTasks = deleteTask("ngủ", myTasks, handleDelete);
myTasks = deleteTask("đi chơi", myTasks, handleDelete);

displayTasks(myTasks);
