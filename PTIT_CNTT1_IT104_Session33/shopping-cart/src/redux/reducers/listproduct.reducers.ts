import { ADD_CART, DELETE_CART } from "../constants/type";

export const listProduct = [
  {
    id: 1,
    name: "Pizza",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    image:
      "https://vietair.com.vn/Media/Images/pizza-ha-noi-o-dau-ngon-zpizza.jpg?",
    quantity: 10,
    price: 30,
  },
  {
    id: 2,
    name: "Hamburger",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2d0Eu6YjNGPsvlTECvThwUJ4il8yZFztdoQ&s",
    quantity: 30,
    price: 15,
  },
  {
    id: 3,
    name: "Bread",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    image:
      "https://media.vov.vn/sites/default/files/styles/large/public/2022-05/vuong.jpg-602x470.png.jpg",
    quantity: 30,
    price: 20,
  },
  {
    id: 4,
    name: "Cake",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    image:
      "https://kreamz.in/wp-content/uploads/2024/02/chocolate-truffle-cake.webp",
    quantity: 30,
    price: 10,
  },
];

type ActionTypes = {
  type: string;
  payload: number;
};
const listProductReducer = (state = listProduct, action: ActionTypes) => {
  switch (action.type) {
    case ADD_CART:
      return state.map((item) =>
        item.id === action.payload && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    // sau khi thuc hien chuc nang xoa se tra ve so luong ban dau
    case DELETE_CART:
      return state.map((item) => {
        if (item.id === action.payload) {
          const original = listProduct.find((p) => p.id === item.id);
          return original ? { ...item, quantity: original.quantity } : item;
        }
        return item;
      });
    default:
      return state;
  }
};

export default listProductReducer;
