import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css";
export default function App() {
  return (
    <Routes>
      {/* Layout cha */}
      <Route path="/" element={<Layout></Layout>}>
        {/* Các trang con */}
        <Route index element={<Home></Home>} />
        <Route path="product" element={<Product></Product>} />
        <Route path="detail" element={<Detail></Detail>} />
      </Route>
    </Routes>
  );
}
