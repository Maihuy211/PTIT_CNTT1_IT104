interface Cart {
  title: string;
}

const Cart = () => {
  const cart: Cart = {
    title: "Cart"
  };

  return <div className="cart">{cart.title}</div>;
};

export default Cart;
