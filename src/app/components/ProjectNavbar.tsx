"use client";
import React, { FunctionComponent } from "react";

import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all"; //
  handleFilterCategory: (category: Category | "all") => void;
  active: Category | "all";
}> = ({ value, handleFilterCategory, active }) => {


  let className = "capitalize cursor-pointer hover:text-green ";
  if (value === active) {
    className += "text-green";
  }

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handleFilterCategory: (category: Category | "all") => void;
  active: Category | "all";
}> = (props) => {
  return (
    <ul className="flex space-x-3 px-3 py-2 list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="django" {...props} />
      <NavItem value="mongo" {...props} />
    </ul>
  );
};

export default ProjectNavbar;
