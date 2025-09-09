import Navbar from "../components/Navbar";
import { courses } from "../db";

const CourseDetail = () => {
  const course = courses[0]; // Lấy khóa học đầu tiên làm mẫu

  return (
    <>
      <Navbar />
      <main className="container">
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <span className="topic-badge">{course.topic}</span>
        <br />
        <button style={{ marginTop: "20px" }}>&larr; Quay lại</button>
      </main>
    </>
  );
};

export default CourseDetail;
