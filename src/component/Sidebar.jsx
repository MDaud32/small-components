import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Buttons", path: "/buttonpage" },
    { label: "Accordion", path: "/accordion" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <div key={link.label}>
        <Link to={link.path}>{link.label}</Link>
      </div>
    );
  });
  return (
    <div className="sticky overflow-y-scroll flex flex-col">{renderLinks}</div>
  );
};

export default Sidebar;
