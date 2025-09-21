import { ADD_CART, DELETE_CART } from "../constants/type";
import { listProduct } from "./listproduct.reducers";

export type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const listCart: CartItem[] = [];

type ActionTypes = {
  type: string;
  payload: number;
};

const listCartReducer = (state = listCart, action: ActionTypes) => {
  switch (action.type) {
    case ADD_CART: {
      const id = action.payload;
      const check = state.find((item) => item.id === id);
      // check xem trong giỏ hàng đã có sản phẩm này hay chưa
      if (check) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        const product = listProduct.find((p) => p.id === id);
        if (product) {
          return [
            ...state,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: 1,
            },
          ];
        }
        return state;
      }
    }

    case DELETE_CART: {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }
    default:
      return state;
  }
};
export default listCartReducer;
