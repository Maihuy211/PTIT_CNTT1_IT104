import Cart from "./Cart";
const Main = () => {
  const carts = [];
  for (let i = 0; i < 16; i++) {
    carts.push(<Cart key={i} />);
  }

  return <main className="main">{carts}</main>;
};

export default Main;
