import { Component } from "react";
import "./Header.css";

type HeaderProps = {
  onToggleCart: () => void;
};

export default class Header extends Component<HeaderProps> {
  render() {
    const { onToggleCart } = this.props;

    return (
      <header className="hd">
        <div className="hd__logo">🛍️ MyShop</div>
        <nav className="hd__nav">
          <a className="hd__link" href="#">
            Trang chủ
          </a>
          <a className="hd__link" href="#">
            Sản phẩm
          </a>
          <a className="hd__link" href="#">
            Liên hệ
          </a>
        </nav>
        <button className="hd__cart" aria-label="Cart" onClick={onToggleCart}>
          🛒<span className="hd__badge">3</span>
        </button>
      </header>
    );
  }
}
