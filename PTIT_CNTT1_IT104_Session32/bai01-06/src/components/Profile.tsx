import { useSelector } from "react-redux";

export default function Profile() {
  const result = useSelector((state) => state.profile);
  return (
    <div>
      Bài 01:
      <h3>Thông tin cá nhân</h3>
      <p>Id : {result.id}</p>
      <p>Họ và tên: {result.name}</p>
      <p>Giới tính: {result.gender}</p>
      <p>Ngày sinh: {result.dateOfBirth}</p>
      <p>Địa chỉ: {result.address}</p>
    </div>
  );
}
