import { useSelector } from "react-redux";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import type { RootState } from "../stores";

export default function ListUser() {
  const users = useSelector((state: RootState) => state.users.value);

  return (
    <div>
      Bai 07:
      <div className="w-72 border border-gray-300 p-4 shadow-sm bg-white">
        <h3 className="text-lg font-semibold mb-4">List Favorites User</h3>
        {users.map((user) => (
          <div
            key={user.id}
            className="border-b border-gray-200 py-3 last:border-b-0"
          >
            <p className="text-gray-800">
              <span className="font-medium">UserName:</span> {user.name}
            </p>
            <p className="flex items-center gap-1 text-gray-700">
              Favorites:{" "}
              {user.favorite ? (
                <HeartFilled className="!text-black" />
              ) : (
                <HeartOutlined className="!text-red-500" />
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
