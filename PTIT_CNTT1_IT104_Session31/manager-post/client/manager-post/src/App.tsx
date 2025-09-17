import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePost from "./components/HomePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePost></HomePost>}></Route>
      </Routes>
    </>
  );
}

export default App;
