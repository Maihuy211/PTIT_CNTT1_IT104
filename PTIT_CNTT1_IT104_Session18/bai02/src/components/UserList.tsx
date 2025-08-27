import { useMemo } from "react";
import "./UserList.css";
type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const users: User[] = [
    { id: 1, name: "Huy", age: 19 },
    { id: 2, name: "An", age: 1 },
    { id: 3, name: "Thành", age: 19 },
  ];

  const adultUsers = useMemo(() => {
    return users.filter((user) => user.age > 18);
  }, [users]);

  return (
    <div>
      <ul>
        {adultUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
}
