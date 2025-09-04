import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";

export default function Bai03() {
  return (
    <div>
      Bài 03:
      <div className="flex gap-[20px]">
        <Card
          cover={
            <img
              alt=""
              src="https://laptoptld.com/wp-content/uploads/2022/11/20230518_152922.jpg"
              className="h-[200px]"
            />
          }
          className="w-[300px]"
        >
          {" "}
          <Meta
            title="MacBook Air 2018"
            description="The reason I am selling the machine is because it is too much power for what I need"
          />
          <div className="mt-[16px] flex justify-between ">
            <Button type="primary">Xem chi tiết</Button>
            <span>30.000.000 đ</span>
          </div>
        </Card>
        <Card
          cover={
            <img
              alt=""
              src="https://truonggiang.vn/wp-content/uploads/2022/03/Macbook-pro-16-inch-Core-i9-1.jpg"
              className="h-[200px]"
            />
          }
          className="w-[300px]"
        >
          {" "}
          <Meta
            title="MacBook Pro 2019"
            description="The reason I am selling the machine is because it is too much power for what I need"
          />
          <div className="mt-[16px] flex justify-between ">
            <Button type="primary">Xem chi tiết</Button>
            <span>30.000.000 đ</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
