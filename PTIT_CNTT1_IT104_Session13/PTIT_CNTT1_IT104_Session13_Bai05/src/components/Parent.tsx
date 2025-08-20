import { Component } from "react";
import Children from "./children";

interface PropsProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  product: PropsProduct;
}

export default class Parent extends Component<PropsProduct, State> {
  constructor(props: PropsProduct) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Buoi ba roi",
        price: 12000,
        quantity: 6,
      },
    };
  }

  render() {
    return (
      <div>
        <Children product={this.state.product} />
      </div>
    );
  }
}
