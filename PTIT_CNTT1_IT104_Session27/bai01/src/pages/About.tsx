export default function About() {
  return (
    <div className="text-center flex-col flex gap-[20px]">
      <h3 className="text-2xl font-bold">Giới thiệu bản thân </h3>
      <p>
        <span className=" text-gray-500">
          Xin chào! Tôi là
          <span className="font-semibold text-blue-400"> Nguyễn Văn A</span>,
          một lập trình viên Frontend đầy đam mê. Tôi yêu thích việc xây dựng
          các ứng dụng web hiện đại và tối ưu trải nghiệm người dùng.
        </span>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Sở thích: </span>
        <span className="text-gray-500">
          Đọc sách, viết code và đi du lịch. Frontend
        </span>
      </p>
      <p>
        <span className="font-semibold text-gray-600">Mục đích: </span>
        <span className="text-gray-500">
          Trở thành một lập trình viên xuất sắc và tạo ra những sản phẩm công
          nghệ có giá trị!
        </span>
      </p>
    </div>
  );
}
