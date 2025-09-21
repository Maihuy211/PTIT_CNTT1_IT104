import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/reducers";
import { Alert, Modal } from "antd";
import { useState } from "react";

export default function Cart() {
  const carts = useSelector((state: RootState) => state.listCart);
  const lencart = carts.length;
  const dispatch = useDispatch();

  const totalPrice = (): number => {
    return carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const [alertUpdate, setAlertUpdate] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);

  const showModal = (id: number) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleOk = () => {
    if (deleteId !== null) {
      dispatch({ type: "DELETE_CART", payload: deleteId });
    }
    setAlertDelete(true);
    setTimeout(() => setAlertDelete(false), 2000);
    setOpen(false);
    setDeleteId(null);
  };

  const handleCancel = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleUpdateSuccess = () => {
    setAlertUpdate(true);
    setTimeout(() => setAlertUpdate(false), 2000);
  };

  return (
    <div>
      <div className="w-[600px] border-[#f2dede] rounded-[7px] border-2">
        <header className="p-2 bg-[#f2dede]">
          <h2 className="text-[#c56e4c]">Your Cart</h2>
        </header>

        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-400">
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {lencart === 0 ? (
                <tr>
                  <td colSpan={5} className="py-4">
                    <b>Empty product in your cart</b>
                  </td>
                </tr>
              ) : (
                carts.map((cart, index) => (
                  <tr
                    key={cart.id}
                    className="text-left border-b border-gray-400"
                  >
                    <td>{index + 1}</td>
                    <td>{cart.name}</td>
                    <td>{cart.price}</td>
                    <td className="p-3">
                      <div className="p-[1px] border border-black items-center flex justify-center w-[50px]">
                        {cart.quantity}
                      </div>
                    </td>
                    <td className="space-x-2">
                      <button
                        className="bg-[#5bc0de] text-white rounded px-2"
                        onClick={handleUpdateSuccess}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white rounded px-2"
                        onClick={() => showModal(cart.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4 w-[500px]">
            <p className="text-gray-700">
              There are <b>{lencart}</b> items in your shopping cart.
            </p>
            <p className="text-red-600 font-bold text-lg">{totalPrice()} USD</p>
          </div>
        </div>
      </div>

      <Modal
        title="Xác nhận xoá"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="OK"
        okType="danger"
        cancelText="Cancel"
      >
        <p>Bạn có chắc chắn muốn xoá sản phẩm này không?</p>
      </Modal>

      <Alert
        message="Update cart successfully"
        type="warning"
        className={`!mt-6 ${alertUpdate ? "!block" : "!hidden"}`}
      />

      <Alert
        message="Delete cart successfully"
        type="error"
        className={`!mt-6 ${alertDelete ? "!block" : "!hidden"}`}
      />
    </div>
  );
}
