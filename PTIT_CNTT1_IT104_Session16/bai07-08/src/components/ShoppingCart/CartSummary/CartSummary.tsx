import { Component } from "react";
import "./CartSummary.css";

type Props = {
  totalText?: string;
};

export default class CartSummary extends Component<Props> {
  static defaultProps: Props = {
    totalText: "0 đ",
  };

  render() {
    const { totalText } = this.props;

    return (
      <div className="cs">
        <div className="cs__row">
          <span>Tạm tính</span>
          <span>{totalText}</span>
        </div>
        <div className="cs__row">
          <span>Phí giao hàng</span>
          <span>Miễn phí</span>
        </div>
        <div className="cs__row cs__row--total">
          <span>Tổng cộng</span>
          <span>{totalText}</span>
        </div>
        <button className="cs__btn">Thanh toán</button>
      </div>
    );
  }
}
