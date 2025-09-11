import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
      </Routes>
    </>
  );
}
