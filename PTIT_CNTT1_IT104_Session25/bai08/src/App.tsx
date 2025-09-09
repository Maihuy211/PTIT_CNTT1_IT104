import { Route, Routes } from "react-router-dom";
import ListUser from "./components/ListUser";
import UserDetail from "./components/UserDetail";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ListUser />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
}
