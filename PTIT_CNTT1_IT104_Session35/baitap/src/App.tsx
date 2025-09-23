import "./App.css";
import ChangeLanguage from "./components/ChangeLanguage";
import Counter from "./components/Counter";
import ListUser from "./components/ListUser";
import ModeFlex from "./components/ModeFlex";
import RandomNumber from "./components/RandomNumber";
import ThemeToggle from "./components/ThemeToggle";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";

function App() {
  return (
    <div className="flex flex-col gap-10 p-5 ">
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ThemeToggle></ThemeToggle>
      <ModeFlex></ModeFlex>
      <Sidebar></Sidebar>
      <ChangeLanguage></ChangeLanguage>
      <ListUser></ListUser>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
