import { Route, Routes } from "react-router-dom";
import "./App.css";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Routes>
        <Route path="/student" element={<Student></Student>}></Route>
      </Routes>
    </>
  );
}

export default App;
