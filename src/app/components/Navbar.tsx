/* eslint-disable @typescript-eslint/no-unsafe-function-type */
"use client";
import React, { useState, useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return activeItem !== name ? (
    <Link href={"/portfolio" + route}>
      <span
        onClick={() => setActiveItem(name)}
        className="hover:text-green md:text-xl"
      >
        {name}
      </span>
    </Link>
  ) : null;
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/portfolio/about") setActiveItem("About");
    if (pathname === "/portfolio/resume") setActiveItem("Resume");
    if (pathname === "/portfolio/projects") setActiveItem("Projects");
  }, []);

  return (
    <div className=" rounded-xl flex justify-between p-2">
      <span className="font-bold border-b-4 border-solid border-green-500  md:text-xl dark:text-white">
        {activeItem}
      </span>
      <div className="flex space-x-3  dark:text-white md:text-sm">
        <NavItem
          activeItem={activeItem}
          name="About"
          route="/about"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          route="/resume"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Projects"
          route="/projects"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default Navbar;
