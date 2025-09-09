import { Routes, Route } from "react-router-dom";
import CustomLink from "./components/CustomLink";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomLink></CustomLink>} />
      <Route path="/home-page" element={<HomePage></HomePage>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
