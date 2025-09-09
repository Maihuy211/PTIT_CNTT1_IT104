import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/" element={<Register></Register>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </>
  );
}

export default App;
