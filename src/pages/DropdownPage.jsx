import { useState } from "react";
import Dropdown from "../component/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
  ];
  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
