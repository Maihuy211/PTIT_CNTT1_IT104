import { Component } from "react";
import type { Product } from "../../data/product.data";
import "./ProductCard.css";

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default class ProductCard extends Component<Props> {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <div className="prd">
        <img className="prd__img" src={product.image} alt={product.name} />
        <div className="prd__body">
          <h3 className="prd__name">{product.name}</h3>
          <p className="prd__price">{product.price.toLocaleString()} đ</p>
          <button className="prd__btn" onClick={() => onAddToCart(product)}>
            🛒 Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}
