import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate dữ liệu
    if (!user.email || !user.password || !user.confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }

    // Lấy users từ localStorage (nếu có)
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check email trùng
    const isExist = users.some((u: User) => u.email === user.email);
    if (isExist) {
      setError("Email đã được đăng ký.");
      return;
    }

    // Lưu user mới
    const newUser = {
      email: user.email,
      password: user.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="bg-white flex items-center justify-center rounded-2xl pb-5">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-slate-800 text-center mb-6 w-[450px]">
          Create account
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Your email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 placeholder:text-slate-400 h-[40px] text-[14px]"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-white h-[40px] text-[14px]"
          >
            Create an account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-gray-500 hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
