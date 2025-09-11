import { Button, Input, Card } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/data";

export default function ProductList() {
  const [input, setInput] = useSearchParams();
  const searchValue = input.get("name") || "";

  const [product, setProduct] = useState(products);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ name: e.target.value });
  };

  const submit = () => {
    if (searchValue === "") {
      setProduct(products);
    } else {
      const value = products.filter((p) =>
        p.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setProduct(value);
    }
  };

  // reset khi query trống
  useEffect(() => {
    if (searchValue === "") {
      setProduct(products);
    }
  }, [searchValue]);

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-6">
        Danh sách sản phẩm
      </h1>

      {/* Search */}
      <div className="flex justify-end mb-6 gap-2">
        <Input
          placeholder="Tìm kiếm..."
          style={{ width: 300 }}
          onChange={change}
          value={searchValue}
        />
        <Button type="primary" onClick={submit}>
          Tìm kiếm
        </Button>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.map((item) => (
          <Card key={item.id} hoverable className="shadow-lg rounded-xl">
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-red-500 font-bold mb-4">
              {item.price.toLocaleString("vi-VN")} VND
            </p>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
