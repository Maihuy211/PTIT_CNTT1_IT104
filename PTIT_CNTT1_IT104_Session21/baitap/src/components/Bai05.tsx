export default function Bai05() {
  return (
    <div>
      Bài 05:
      <div className="p-3 bg-[#d7f2fe] rounded-[8px]">
        <div className="relative w-[200px] h-[100px] bg-[#b7e8fd] p-2">
          <p className="text-[#0369a1]">Relative parent</p>
          <div className="absolute bottom-0 left-0 bg-[#0ea5e9] rounded-[8px] p-2">
            <p className="text-white">Absolute child</p>
          </div>
        </div>
      </div>
    </div>
  );
}
