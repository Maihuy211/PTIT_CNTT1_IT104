import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChangeLanguage from "./components/ChangeLanguage";
import Counter from "./components/Counter";
import ListUser from "./components/ListUser";
import Login from "./components/Login";
import ModeFlex from "./components/ModeFlex";
import RandomNumber from "./components/RandomNumber";
import ThemeToggle from "./components/ThemeToggle";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="flex flex-col gap-10 p-5 ">
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ThemeToggle></ThemeToggle>
      <ModeFlex></ModeFlex>
      <ChangeLanguage></ChangeLanguage>
      <ListUser></ListUser>
      <Routes>
        <Route path="/hompage" element={<HomePage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
