import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  address: string;
}

export default function ListUser() {
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

  const navigate = useNavigate();

  return (
    <div className="list-container">
      {users.map((u) => (
        <div key={u.id} className="user-card">
          <p>Id:{u.id}</p>
          <p>UserName: {u.name}</p>
          <p>Email:{u.email}</p>
          <p>Address:{u.address}</p>
          <button onClick={() => navigate(`/user/${u.id}`)}>
            Xem chi tiết
          </button>
        </div>
      ))}
    </div>
  );
}
