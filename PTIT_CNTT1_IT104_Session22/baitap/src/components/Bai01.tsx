import { Button } from "antd";

export default function Bai01() {
  return (
    <div>
      Bài 01:
      <div className="flex gap-[20px]">
        <Button type="primary">Lưu</Button>
        <Button className="!bg-gray-500 !text-white">Hủy</Button>
        <Button className="!bg-green-600 !text-white">Thành công</Button>
        <Button className="!bg-yellow-400 !text-black">Cảnh báo</Button>
        <Button className="!bg-red-500 !text-white">Báo lỗi</Button>
        <Button className="!bg-sky-500 !text-white">Thông tin</Button>
        <Button type="link">Đường dẫn</Button>
      </div>
    </div>
  );
}
