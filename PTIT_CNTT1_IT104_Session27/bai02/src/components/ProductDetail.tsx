import { useParams, Link } from "react-router-dom";
import { products } from "./ProductList";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-500">
          Sản phẩm không tồn tại
        </h1>
        <Link to="/" className="text-blue-500 hover:underline">
          Quay lại danh sách
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Chi tiết sản phẩm</h2>
      <div className="">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">Giá: {product.price} VND</p>
        <p className="text-gray-700 mb-4">
          Mô tả : Đây là sản phẩm <b>{product.name}</b> với thiết kế hiện đại,
          hiệu năng mạnh mẽ và độ bền cao.
        </p>

        <Link to="/" className="text-blue-500 hover:underline">
          Quay lại danh sách
        </Link>
      </div>
    </div>
  );
}
