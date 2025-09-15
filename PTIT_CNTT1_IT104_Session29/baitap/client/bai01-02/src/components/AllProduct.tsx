import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
}

export default function AllProduct() {
  const [products, setProducts] = useState<Product[]>([]);

  const getAllProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      console.log("API data:", res.data);
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Danh sách sản phẩm</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.product_name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.product_name}</h3>
            <p>Giá: {product.price.toLocaleString()} VND</p>
            <p>Số lượng: {product.quantity}</p>
            <p>Ngày thêm: {product.created_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
