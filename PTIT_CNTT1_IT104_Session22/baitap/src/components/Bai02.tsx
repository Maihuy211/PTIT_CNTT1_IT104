import { Input } from "antd";
export default function Bai02() {
  return (
    <div className="w-[500px]">
      Bài 02:
      <div className="flex justify-center flex-col gap-[20px]">
        <Input size="large" placeholder="Input cỡ lớn"></Input>
        <Input size="middle" placeholder="Input cỡ trung bình"></Input>
        <Input size="small" placeholder="INput cỡ bé"></Input>
      </div>
    </div>
  );
}
