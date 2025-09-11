import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}
