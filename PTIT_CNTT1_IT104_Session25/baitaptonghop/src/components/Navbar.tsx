const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          E-Learning
        </a>
        <ul className="nav-links">
          {/* class "active" được thêm vào để minh họa giao diện */}
          <li>
            <a href="#" className="active">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#">Quản trị</a>
          </li>
          <li>
            <a href="#">Đăng nhập</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
