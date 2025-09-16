import "./App.css";
import TodoList from "./components/TodoList";
// import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex justify-center p-[20%] ">
      <div>
        <div className="border-2 rounded-[8px] p-3 border-gray-300">
          <TodoList></TodoList>
        </div>
        {/* <div>
          <ManagerStudent></ManagerStudent>
        </div> */}
      </div>
    </div>
  );
}
export default App;
