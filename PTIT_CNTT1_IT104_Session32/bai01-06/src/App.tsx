import "./App.css";
import ChangeState from "./components/ChangeState";
import Counter from "./components/Counter";
import ListUser from "./components/ListUser";
import Profile from "./components/Profile";
import RandomNumber from "./components/RandomNumber";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="container">
      <Profile></Profile>
      <ListUser></ListUser>
      <Counter></Counter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export default App;
