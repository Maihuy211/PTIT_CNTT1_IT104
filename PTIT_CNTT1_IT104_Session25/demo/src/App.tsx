import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserLayout from "./layouts/UserLayout";
import Profile from "./pages/Profile";
import Bank from "./pages/Bank";
import ChangePassword from "./pages/ChangePassword";
function App() {
  return (
    <>
      {/* định nghĩa danh sách các đường dẫn của ứng dụng  */}
      <Routes>
        {/* định nghĩa từng router tương ứng với từng components */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        {/* Định nghĩa danh sách các router con của user */}
        <Route path="/user" element={<UserLayout></UserLayout>}>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="bank" element={<Bank></Bank>}></Route>
          <Route
            path="changePassword"
            element={<ChangePassword></ChangePassword>}
          ></Route>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
