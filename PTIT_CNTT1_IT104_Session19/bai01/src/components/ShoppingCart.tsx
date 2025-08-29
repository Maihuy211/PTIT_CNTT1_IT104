import { useMemo } from "react";
import "./ShoppingCart.css";
const cartItems = [
  { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
  { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
  { id: 3, name: "Sản phẩm C", price: 300000, quantity: 1 },
];
export default function ShoppingCart() {
  const totol = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, []);
  return (
    <div>
      <h3>Giỏ hàng</h3>
      <ul>
        {cartItems.map((cart) => (
          <li key={cart.id}>
            name: {cart.name} - price: {cart.price} - quantity: {cart.quantity}
          </li>
        ))}
      </ul>
      <p>Total: {totol}đ</p>
    </div>
  );
}
