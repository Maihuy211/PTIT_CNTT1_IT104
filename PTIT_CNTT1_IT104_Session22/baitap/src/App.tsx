import Bai01 from "./components/Bai01";
import Bai02 from "./components/Bai02";
import Bai03 from "./components/Bai03";
import Bai04 from "./components/Bai04";
import Bai05 from "./components/Bai05";
import Bai06 from "./components/Bai06";
import "./index.css";

function App() {
  return (
    <div className="p-[20px] flex-col gap-[50px]">
      <Bai01></Bai01>
      <Bai02></Bai02>
      <Bai03></Bai03>
      <Bai04></Bai04>
      <Bai05></Bai05>
      <Bai06></Bai06>
    </div>
  );
}

export default App;
