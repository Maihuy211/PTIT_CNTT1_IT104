import LoginAccount from "./components/LoginAccount/LoginAccount";
import RegisterAccount from "./components/RegisterAccount/RegisterAccount";
import "./App.css";
function App() {
  return (
    <div className="main">
      <RegisterAccount></RegisterAccount>
      <LoginAccount></LoginAccount>
    </div>
  );
}

export default App;
