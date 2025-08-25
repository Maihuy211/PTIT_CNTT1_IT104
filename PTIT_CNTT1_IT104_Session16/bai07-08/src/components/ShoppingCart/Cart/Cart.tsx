import CartItem from "../CartItem/CartItem";
import CartSummary from "../CartSummary/CartSummary";
import type { Product } from "../../../data/product.data";
import "./Cart.css";

type CartItemType = Product & { cartQty: number };

export default function Cart({ cart }: { cart: CartItemType[] }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.cartQty, 0);

  return (
    <div className="crt">
      <div className="crt__head">Giỏ hàng</div>

      <div className="crt__list">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            priceText={item.price.toLocaleString() + " đ"}
            qty={item.cartQty}
            image={item.image}
          />
        ))}
      </div>

      <CartSummary totalText={total.toLocaleString() + " đ"} />
    </div>
  );
}
