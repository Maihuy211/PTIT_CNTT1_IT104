import Content from "./components/Content";
import Header from "./components/Header";
import ThemeProvider from "./components/ThemeProvider";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
