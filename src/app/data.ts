import { IProject, IServices, ISkill } from "./types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { AiOutlineAntDesign } from "react-icons/ai";

import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";

export const services: IServices[] = [
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",
    Icon: RiComputerLine,
  },
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",

    Icon: FaServer,
  },
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",

    Icon: MdDeveloperMode,
  },
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",

    Icon: AiOutlineApi,
  },
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",

    Icon: AiOutlineAntDesign,
  },
  {
    title: "Frontend Developer",
    about:
      "I can build a beautiful and scallable SPA using <b>HTML</b> , <b>CSS</b> and <b>React.js</b>",

    Icon: RiComputerLine,
  },
];

export const languages: ISkill[] = [
  {
    name: "Css",
    level: "25",
    Icon: FaCss3,
  },
  {
    name: "Javascript",
    level: "65",
    Icon: FaJs,
  },
  {
    name: "Node js",
    level: "65",
    Icon: FaNodeJs,
  },

  {
    name: "Python",
    level: "65",
    Icon: FaPython,
  },
  {
    name: "Database",
    level: "65",
    Icon: FaDatabase,
  },
];

export const tools: ISkill[] = [
  {
    name: "Git & GitHub ",
    level: "75",
    Icon: BsCircleFill,
  },
  {
    name: "Framer",
    level: "65",
    Icon: BsCircleFill,
  },
  {
    name: "Docker",
    level: "65",
    Icon: BsCircleFill,
  },
  {
    name: "Vs Code , Intelli J",
    level: "65",
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 2,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 3,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 4,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 5,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 6,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 7,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  {
    id: 8,
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.webp",
    deployed_url: "https://covid-12-tracker-by-sumit.web.app",
    github_url: "https://github.com/CHRIS-CODER/Covid-12-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
];
