import { useSelector } from "react-redux";
interface User {
  id: number;
  name: string;
  gender: string;
  birthDate: string;
  address: string;
}
export default function ListUser() {
  const result = useSelector((state) => state.listUser);

  return (
    <div>
      Bài 02:
      <div>
        <table border={1} cellPadding={5} cellSpacing={0}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên</th>
              <th>Giới tính</th>
              <th>Ngày sinh</th>
              <th>Địa chỉ</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {result.map((list: User) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.gender}</td>
                <td>{list.birthDate}</td>
                <td>{list.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
