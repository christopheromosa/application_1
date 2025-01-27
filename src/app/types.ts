import { IconType } from "react-icons";
export interface IServices {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
  id:number
}

export type Category = "react" | "node" | "express" | "django" | "mongo";

export interface ProjectNavbarProps {
  handleFilterCategory: (category: Category | "all") => void;
  active: Category | "all"; // Use the same type for active
}