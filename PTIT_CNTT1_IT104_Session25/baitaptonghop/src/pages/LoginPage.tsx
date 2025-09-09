// src/pages/LoginPage.jsx
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="login-container">
          <h2>Đăng nhập trang Quản trị</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input type="text" id="username" defaultValue="admin" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input type="password" id="password" defaultValue="123456" />
            </div>
            <button type="submit">Đăng nhập</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
