import Header from "./Header";
import FromTask from "./FromTask";
import FilterTask from "./FilterTask";
import ListTask from "./ListTask";

export default function TaskManager() {
  return (
    <div className="w-[560px] flex flex-col gap-5">
      {/* Title */}
      <Header></Header>

      {/* Form thêm công việc */}
      <FromTask></FromTask>

      {/* Bộ lọc */}
      <FilterTask></FilterTask>

      {/* Danh sách công việc */}
      <ListTask></ListTask>
    </div>
  );
}
