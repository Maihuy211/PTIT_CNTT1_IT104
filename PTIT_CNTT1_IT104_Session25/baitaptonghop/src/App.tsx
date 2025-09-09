import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/*" element={<NotFoundPage></NotFoundPage>}></Route>
        <Route
          path="/courses/:courseId"
          element={<CourseDetail></CourseDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
