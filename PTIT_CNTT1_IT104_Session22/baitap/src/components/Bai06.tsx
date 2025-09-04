import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

export default function SpinnersDemo() {
  return (
    <div>
      Bài 06:
      <Flex>
        <div></div>
        <Spin
          size="default"
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "blue" }} spin />
          }
        />
        <Spin
          size="default"
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "gray" }} spin />
          }
        />
        <Spin
          size="default"
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "green" }} spin />
          }
        />
      </Flex>
    </div>
  );
}
