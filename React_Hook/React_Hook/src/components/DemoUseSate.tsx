import { useState } from "react";
import "./Style.css";

export default function DemoUseSate() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    address: "",
    gender: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="username"
            name="userName"
            value={user.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={user.gender === "Nam"}
              onChange={handleChange}
            />{" "}
            Nam
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={user.gender === "Nữ"}
              onChange={handleChange}
            />{" "}
            Nữ
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={user.gender === "Khác"}
              onChange={handleChange}
            />{" "}
            Khác
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
