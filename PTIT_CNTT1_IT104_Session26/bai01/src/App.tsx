import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/ProductDetail";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/product/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/student/:name" element={<Student></Student>}></Route>
      </Routes>
    </>
  );
}

export default App;
