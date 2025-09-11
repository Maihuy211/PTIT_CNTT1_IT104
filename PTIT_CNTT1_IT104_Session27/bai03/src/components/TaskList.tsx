import { Link } from "react-router-dom";
import { tasks } from "../data/data";

export default function TaskList() {
  return (
    <div className="flex justify-center p-6">
      <div className=" w-[600px]">
        <h1 className="text-2xl font-bold mb-6">Danh sách công việc</h1>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="border p-4 rounded-lg shadow ">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="text-gray-600">{task.description}</p>
              <Link
                to={`/task/${task.id}`}
                className="text-blue-500 mt-2 inline-block"
              >
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
