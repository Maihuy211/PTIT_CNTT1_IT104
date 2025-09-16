import { Button } from "antd";

interface TaskFilterProps {
  setFilter: (filter: "all" | "done" | "doing") => void;
  filter: "all" | "done" | "doing";
}

export default function TaskFilter({ setFilter, filter }: TaskFilterProps) {
  return (
    <div className="bg-white shadow-lg p-4 rounded border-gray-100 border-2v">
      <div className="flex justify-center gap-2">
        <Button
          type={filter === "all" ? "primary" : "default"}
          className="!h-[40px]"
          onClick={() => setFilter("all")}
        >
          Tất cả
        </Button>
        <Button
          type={filter === "done" ? "primary" : "default"}
          className="!h-[40px]"
          onClick={() => setFilter("done")}
        >
          Hoàn Thành
        </Button>
        <Button
          type={filter === "doing" ? "primary" : "default"}
          className="!h-[40px]"
          onClick={() => setFilter("doing")}
        >
          Đang Thực Hiện
        </Button>
      </div>
    </div>
  );
}
