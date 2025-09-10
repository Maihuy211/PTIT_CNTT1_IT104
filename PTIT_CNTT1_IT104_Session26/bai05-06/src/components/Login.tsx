import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Form {
  email: string;
  password: string;
  role: string;
}
export default function Login() {
  const [user] = useState<Form>({
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
  });
  const [formData, setFormData] = useState<Form>({
    email: "",
    password: "",
    role: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handlSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      formData.email === user.email &&
      formData.password === user.password &&
      formData.role === user.role
    ) {
      navigate("/account");
    } else {
      setError("Sai thông tin đăng nhập!");
    }
  };
  return (
    <div>
      <form className="container-form" onSubmit={handlSubmit}>
        <h2>Đăng nhập</h2>

        <input
          type="email"
          name="email"
          placeholder="Nhập email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">-- Chọn quyền --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
