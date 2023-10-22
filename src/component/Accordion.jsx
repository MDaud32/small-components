import propTypes from "prop-types";
import { useState } from "react";
import { BiSolidChevronDown, BiSolidChevronLeft } from "react-icons/bi";

const Accordion = ({ items }) => {
  const [expandIndex, setExpandIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandIndex((current) => {
      if (current === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItem = items.map((item, index) => {
    const isExpand = index === expandIndex;

    const content = isExpand && <div>{item.content}</div>;

    const icon = (
      <span>{isExpand ? <BiSolidChevronDown /> : <BiSolidChevronLeft />}</span>
    );

    return (
      <div key={item.label}>
        <div onClick={() => handleClick(index)} className="flex">
          {item.label} {icon}
        </div>
        <div>{content}</div>
      </div>
    );
  });
  return <div>{renderedItem}</div>;
};

export default Accordion;

Accordion.propTypes = {
  items: propTypes.any,
};
