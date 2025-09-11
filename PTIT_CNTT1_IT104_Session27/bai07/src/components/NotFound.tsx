import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h3 className="text-2xl font-semibold mb-2">
          Trang bạn tìm không tồn tại.
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          Có thể đường dẫn bạn nhập sai hoặc trang đã được di chuyển.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg "
          >
            Quay về trang chủ
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            Quay lại
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Nếu vấn đề tiếp tục, kiểm tra URL hoặc liên hệ quản trị viên.
        </p>
      </div>
    </div>
  );
}
