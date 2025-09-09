import { courses } from "../db";

const Sidebar = () => (
  <aside className="sidebar">
    <h3>Admin Panel</h3>
    <ul>
      <li>
        {/* class "active" được thêm vào để minh họa giao diện */}
        <a href="#" className="active">
          Tổng quan
        </a>
      </li>
      <li>
        <a href="#">Quản lý Khóa học</a>
      </li>
    </ul>
  </aside>
);

const AdminPage = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="admin-content">
        {/* Phần nội dung của trang con, ví dụ Dashboard */}
        <h2>Tổng quan</h2>
        <p>Chào mừng đến với trang quản trị!</p>
        <p>
          Hiện có tổng cộng <strong>{courses.length}</strong> khóa học trong hệ
          thống.
        </p>
      </main>
    </div>
  );
};

export default AdminPage;
