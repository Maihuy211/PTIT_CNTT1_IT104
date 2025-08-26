import { useState } from "react";
import "./FullName.css";
export default function FullName() {
  const [fullName] = useState("Mai Van huy");
  return (
    <div>
      <h1>Ho va ten : {fullName}</h1>
    </div>
  );
}
