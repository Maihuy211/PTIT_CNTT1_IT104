import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex justify-center p-6">
      <div className="w-[500px]">
        <h2 className="text-3xl font-medium mb-4">About</h2>
        <p className="text-gray-600 mb-6 max-w-lg">Trang giới thiệu mẫu</p>

        <Link to="/" className="text-blue-600 ">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}
