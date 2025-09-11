export default function Contact() {
  return (
    <div className="text-center flex-col flex gap-[20px]">
      <h3 className="text-2xl font-bold">Thông tin liên hệ</h3>
      <p>
        <span className="font-semibold text-gray-600">Email:</span>{" "}
        <span className="font-semibold text-blue-400">nguynvana@gmail.com</span>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Số điện thoại:</span>{" "}
        <span className="text-gray-500">0123 456 789</span>
      </p>
      <p>
        <span className="font-semibold text-gray-600">LinkedIN:</span>{" "}
        <span className="font-semibold text-blue-400">
          :linkedin.com/in/nguyenvana
        </span>
      </p>
    </div>
  );
}
