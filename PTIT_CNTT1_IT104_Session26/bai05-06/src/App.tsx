import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRouter></PrivateRouter>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
      </Routes>
    </>
  );
}

export default App;
