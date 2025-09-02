import React, { useEffect, useState } from "react";
import "./PageTitle.css";
export default function PageTitle() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value) {
      document.title = `Chào, ${value}!`;
    } else {
      document.title = "Trang web của bạn";
    }
  }, [value]);
  return (
    <div className="container">
      <h3>Chào mưng bạn đến với trang của chúng tôi</h3>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Nhập tên của bạn"
      />
      <p>Tiêu đề trang thay đổi khi bạn nhpậ tên vào trường trên</p>
    </div>
  );
}
