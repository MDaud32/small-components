import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";
import propTypes from "prop-types";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event) => {
    setIsOpen(false);
    onChange(event);
  };

  const dropdownList = options.map((option) => {
    return (
      <div key={option.value}>
        <div onClick={() => handleOptionClick(option)}>{option.label}</div>
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48">
      <Panel className="border-2" onClick={handleClick}>
        {value?.label || "Select..."}
      </Panel>
      {isOpen && <Panel className="hover:bg-slate-300">{dropdownList}</Panel>}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: propTypes.any,
  value: propTypes.any,
  onChange: propTypes.any,
};
