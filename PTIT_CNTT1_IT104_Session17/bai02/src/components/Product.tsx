import { useState } from "react";
import "./Product.css";
export default function Product() {
  const [product] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });

  return (
    <div>
      <h3>Thông tin sản phẩm</h3>
      <p>Id : {product.id}</p>
      <p>Name : {product.name}</p>
      <p>Price : {product.price}$</p>
      <p>Quantity : {product.quantity}</p>
    </div>
  );
}
