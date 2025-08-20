import { Component } from "react";

interface PropsProduct {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
}

interface State {
  product: PropsProduct;
}

export default class Children extends Component<State> {
  render() {
    const { product } = this.props;
    return (
      <div>
        <h3>Dự liệu trong components con</h3>
        <p>Id: {product.id}</p>
        <p>Product name: {product.name}</p>
        <p>Price: {product.price} đ</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  }
}
