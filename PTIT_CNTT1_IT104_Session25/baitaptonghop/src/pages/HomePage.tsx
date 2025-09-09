// src/pages/HomePage.jsx
import Navbar from "../components/Navbar";
import { courses } from "../db";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Danh sách khóa học</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Tìm kiếm khóa học..."
            className="search-input"
          />
          <select>
            <option value="">Tất cả chủ đề</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div className="course-list">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>
                {/* Dùng thẻ <a> thay cho Link */}
                <a href="#">{course.title}</a>
              </h3>
              <p>{course.description}</p>
              <span className="topic-badge">{course.topic}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
