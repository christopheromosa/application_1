"use client";
import React from "react";
import Profile_pic from "/src/public/images/profile.webp";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="flex flex-col items-center gap-2 dark:text-white">
      <Image
        src={Profile_pic}
        alt="profile picture
      "
        className="rounded-full h-32 w-32 lg:h-13"
      />
      <h3 className="font-medium text-3xl tracking-wider lg:text-sm lg:tracking-normal">
        <span className="text-green font-semibold">Christopher </span>
        <span className="  md:dark:text-white"> Omosa</span>
      </h3>
      <p className="text-center bg-gray-200 dark:bg-dark-200 w-full  lg:py-1 shadow-lg rounded-full  text-sm  my-2">
        Web Developer
      </p>
      <a
        href=""
        className=" flex justify-center items-center bg-gray-200 dark:bg-dark-200 w-full py-2 shadow-lg rounded-full lg:py-1 text-sm cursor-pointer space-x-4"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      {/* Social links icons*/}
      <div className="flex justify-around space-x-7 lg:space-x-4  md:w-full">
        <span className="social-icons">
          <a href="">
            <FaYoutube />
          </a>
        </span>

        <span className="social-icons">
          <a href="">
            <FaLinkedin />
          </a>
        </span>

        <span className="social-icons">
          <a href="">
            <FaGithub />
          </a>
        </span>
      </div>
      {/* Address */}
      <div
        className=" bg-gray-200 dark:bg-dark-200 w-full text-center dark:text-white py-2 mb-1"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <p className=" flex justify-center gap-2 items-center text-sm lg:text-sm ">
          <GoLocation />
          Kisii, Kenya
        </p>
        <p className=" text-sm lg:text-sm">christopheromosa632@gmail.com</p>
        <p className="text-sm lg:text-sm">1234567234/7654321567</p>
      </div>

      {/* email me and toggle darkmode btn */}

      <button className="bg-gradient-to-r from-green to-blue-500 rounded-full  w-3/4 py-2 px-5">
        Email Me
      </button>
      <button
        className="bg-gradient-to-r from-green to-blue-500 rounded-full  w-3/4 py-2 px-5"
        onClick={changeTheme}
      >
        {" "}
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
