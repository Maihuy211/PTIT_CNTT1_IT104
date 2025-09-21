import "./App.css";
import Cart from "./components/Cart";
import ListProducts from "./components/ListProducts";

function App() {
  return (
    <div className="flex justify-center p-5 gap-8">
      <div>
        <ListProducts></ListProducts>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
