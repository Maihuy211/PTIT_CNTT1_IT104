import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/loginSlices";
import type { RootState } from "../stores";
import { Button, Card } from "antd";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, currentUser } = useSelector(
    (state: RootState) => state.login
  );

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  if (!isLogin || !currentUser) {
    return <h2>Bạn chưa đăng nhập!</h2>;
  }

  return (
    <div>
      Bai08:
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card>
          <div className="flex justify-center flex-col gap-3">
            {" "}
            <div>User Name: {currentUser.userName}</div>
            <div>Email: {currentUser.email}</div>
            <Button onClick={handleLogout}>Đăng xuất</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
