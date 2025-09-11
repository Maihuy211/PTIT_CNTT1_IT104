// TaskDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "../data/data";

export default function TaskDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="flex justify-center p-6">
        <h2 className="p-6 text-red-500">Không tìm thấy công việc</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
        <p className="mb-4 text-gray-700">{task.description}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Quay lại
        </button>
      </div>
    </div>
  );
}
