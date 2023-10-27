import React from "react";
import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Buttons", path: "/buttonpage" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <div key={link.label}>
        <Link
          to={link.path}
          className="mb-3"
          activeClassName="font-bold border-l-4 border-blue-500 pl-2">
          {link.label}
        </Link>
      </div>
    );
  });
  return (
    <div className="sticky overflow-y-scroll flex flex-col">{renderLinks}</div>
  );
};

export default Sidebar;
