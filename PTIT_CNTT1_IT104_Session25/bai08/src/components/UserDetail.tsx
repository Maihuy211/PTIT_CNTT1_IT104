import { useParams, useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const users: User[] = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <p>Không tìm thấy user!</p>;
  }

  return (
    <div className="list-container">
      <div className=".user-card">
        <h2>Chi tiết người dùng</h2>
        <p>Id: {user.id}</p>
        <p>UserName: {user.name}</p>
        <p> Email: {user.email}</p>
        <p>Address:{user.address}</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </div>
  );
}
