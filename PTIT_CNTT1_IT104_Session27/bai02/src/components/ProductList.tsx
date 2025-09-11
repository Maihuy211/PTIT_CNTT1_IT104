import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const products = [
  { id: 1, name: "Laptop Dell XPS 13", price: 35000000 },
  { id: 2, name: "iPhone 14 Pro", price: 30000000 },
  { id: 3, name: "Samsung Galaxy S22", price: 25000000 },
  { id: 4, name: "Tai nghe Sony WH-1000XM4", price: 7000000 },
  { id: 5, name: "Apple Watch Series 8", price: 12000000 },
];

export default function ProductList() {
  return (
    <div>
      <div className="mt-6 flex gap-4 flex-wrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-md shadow-sm p-4 w-56"
          >
            <h2 className="text-sm font-semibold">{product.name}</h2>
            <p className="text-gray-600">Giá: {product.price} VND</p>
            <Link
              to={`/products/${product.id}`}
              className="text-blue-500 text-sm mt-2 block hover:underline"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
