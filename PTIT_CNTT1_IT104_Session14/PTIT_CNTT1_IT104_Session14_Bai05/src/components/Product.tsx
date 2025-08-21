import { Component } from "react";
import "./Product.css";
type Products = {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

type StateTypes = {
  product: Products;
};

export default class Product extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);
    this.state = {
      product: {
        productCode: "",
        productName: "",
        price: 0,
        quantity: 0,
      },
    };
  }
  render() {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      // Lấy ra name và value của từng ô input
      const { name, value } = event.target;
      this.setState({
        product: {
          ...this.state.product,
          [name]: value,
        },
      });
    };
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();

      console.log(this.state.product);
    };
    return (
      <div className="form-container">
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Mã sản phẩm</label>
            <input type="text" name="productCode" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="">Tên sản phẩm</label>
            <input name="productName" type="text" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="">Giá</label>
            <input name="price" type="number" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="">Số lượng</label>
            <input name="quantity" type="numbrt" onChange={handleChange} />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}
