import { Component } from "react";
import Header from "../Header/Header";
import ProductCard from "../Product/ProductCard";
import Cart from "./Cart/Cart";
import { products, type Product } from "../../data/product.data";
import "./ShoppingCart.css";

type CartItem = Product & { cartQty: number };

type StateTypes = {
  isCartOpen: boolean;
  cart: CartItem[];
};

export default class ShoppingCart extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      isCartOpen: false,
      cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    };
  }

  toggleCart = () => {
    this.setState((prev) => ({ isCartOpen: !prev.isCartOpen }));
  };

  addToCart = (product: Product) => {
    this.setState((prev) => {
      const exist = prev.cart.find((item) => item.id === product.id);
      let newCart: CartItem[];
      if (exist) {
        if (exist.cartQty + 1 > product.qty) {
          alert("Số lượng sản phẩm trong kho không đủ");
          return prev;
        }
        newCart = prev.cart.map((item) =>
          item.id === product.id ? { ...item, cartQty: item.cartQty + 1 } : item
        );
      } else {
        newCart = [...prev.cart, { ...product, cartQty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...prev, cart: newCart };
    });
  };

  render() {
    const { isCartOpen, cart } = this.state;

    return (
      <div className="sc">
        <Header onToggleCart={this.toggleCart} />

        <main className="sc__main">
          <section className="sc__products">
            <h2 className="sc__title">Danh sách sản phẩm</h2>
            <div className="sc__grid">
              {products.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAddToCart={this.addToCart}
                />
              ))}
            </div>
          </section>

          {isCartOpen && (
            <aside className="sc__cart">
              <Cart cart={cart} />
            </aside>
          )}
        </main>
      </div>
    );
  }
}
