import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/reducers";

export default function ListProducts() {
  const products = useSelector((state: RootState) => state.listProduct);
  const dispatch = useDispatch();

  // hàm thêm
  const handleAdd = (id: number) => {
    dispatch({
      type: "ADD_CART",
      payload: id,
    });
  };

  return (
    <div className="w-[610px] border-[#337ab7] rounded-[7px] border-2">
      <header className="p-2 bg-[#337ab7]">
        <h2 className="text-white">List Products</h2>
      </header>

      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-[20px]">
          <div className="p-4 flex gap-3 w-full justify-between">
            <div className="flex gap-3 w-[500px] justify-items-start">
              <div className="w-[300px] h-[100px]">
                <img
                  src={product.image}
                  alt="ảnh minh hoạ"
                  className="w-full h-full"
                />
              </div>

              <div>
                <h3 className="text-2xl">{product.name}</h3>
                <p>{product.title}</p>
              </div>
            </div>

            <div className="flex flex-col justify-evenly">
              <button
                disabled={product.quantity === 0}
                className={`p-[3px] items-center flex justify-center text-white 
                  ${product.quantity === 0 ? "bg-gray-400" : "bg-amber-600"}`}
                onClick={() => handleAdd(product.id)}
              >
                {product.price} USD
              </button>

              <div className="p-[1px] border border-gray-300 items-center flex justify-center">
                {product.quantity}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
