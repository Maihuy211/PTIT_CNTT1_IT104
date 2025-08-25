import { Component } from "react";
import "./CartItem.css";

type Props = {
  name?: string;
  priceText?: string;
  qty?: number;
  image?: string;
};

export default class CartItem extends Component<Props> {
  static defaultProps: Props = {
    name: "Tên sản phẩm",
    priceText: "0 đ",
    qty: 1,
    image: "https://via.placeholder.com/60x60?text=IMG",
  };

  render() {
    const { name, priceText, qty, image } = this.props;

    return (
      <div className="ci">
        <img className="ci__img" src={image} alt={name} />
        <div className="ci__info">
          <div className="ci__name">{name}</div>
          <div className="ci__price">{priceText}</div>
        </div>

        <div className="ci__qty">
          <button className="ci__btn" aria-label="Giảm">
            −
          </button>
          <span className="ci__num">{qty}</span>
          <button className="ci__btn" aria-label="Tăng">
            +
          </button>
        </div>

        <button className="ci__remove" aria-label="Xóa">
          ✕
        </button>
      </div>
    );
  }
}
