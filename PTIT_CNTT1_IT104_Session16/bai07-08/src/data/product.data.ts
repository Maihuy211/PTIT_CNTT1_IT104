// src/data/product.data.ts
export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  qty: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Samsung Galaxy",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 20000000,
    qty: 5,
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 25000000,
    qty: 3,
  },
  {
    id: 3,
    name: "Oppo A9",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 8900000,
    qty: 10,
  },
  {
    id: 4,
    name: "iPhone 11 Pro Max",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 12500000,
    qty: 6,
  },
  {
    id: 5,
    name: "Xiaomi Mi 11",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 10500000,
    qty: 8,
  },
  {
    id: 6,
    name: "Vivo V23",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 9200000,
    qty: 7,
  },
  {
    id: 7,
    name: "Realme GT",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 11800000,
    qty: 9,
  },
  {
    id: 8,
    name: "Huawei P50",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro_1.png",
    price: 15300000,
    qty: 4,
  },
];
