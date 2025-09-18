import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const registerState = useSelector((state) => state.register);
  console.log(registerState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Hàm handleChange dùng cho cả email và password
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "REGISTER",
      payload: { email: form.email, password: form.password },
    });
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Đăng ký</h2>
      <form className="form" onSubmit={handleRegister}>
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
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
}
