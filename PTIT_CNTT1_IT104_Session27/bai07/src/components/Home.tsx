import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-6">
      <div className="w-[500px]">
        <h2 className="text-3xl font-medium mb-4">Trang chủ</h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Đây là trang chủ. Thử gõ một đường dẫn không tồn tại ví dụ /abcxyz vào
          thanh địa chỉ để xem trang 404.
        </p>
        <button
          onClick={() => navigate("/about")}
          className="bg-indigo-600 text-white rounded-[8px] p-2"
        >
          Đi đến About
        </button>
      </div>
    </div>
  );
}
