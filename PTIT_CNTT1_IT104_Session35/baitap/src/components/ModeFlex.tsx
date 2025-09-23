import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores";
import { Button } from "antd";
import { mode } from "../slices/modeSlices";

export default function ModeFlex() {
  const result = useSelector((state: RootState) => state.mode.value);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(mode());
  };

  return (
    <div>
      Bài 04:
      <div>
        {" "}
        <Button className="mb-4" onClick={handleChange}>
          {result ? "list mode" : "Grid mode"}
        </Button>
        {result ? (
          <div className="w-[300px] justify-center flex flex-col gap-2">
            <div className="bg-red-500 text-center ">1</div>
            <div className="bg-red-500 text-center">2</div>
            <div className="bg-red-500 text-center">3</div>
            <div className="bg-red-500 text-center">4</div>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              1
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              2
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              3
            </div>
            <div className="bg-red-500 text-center w-[100px] h-[100px] flex justify-center items-center">
              4
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
