import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const loginState = useSelector((state) => state.login);
  console.log(loginState);

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Hàm handleChange dùng cho cả email
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      payload: { email: form.email, password: form.password },
    });
  };

  return (
    <div className="container">
      <h2>Đăng Nhập</h2>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Nhập email..."
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu..."
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
}
