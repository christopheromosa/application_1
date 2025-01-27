"use client";
import React, { FunctionComponent} from "react";
import { IProject } from "../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import Project_img from "../../public/images/covid.webp";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    name,
    description,
    // image_path,
    // category,
    deployed_url,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={Project_img}
        alt={name}
        className="cursor-pointer w-35 h-32 sm:h-36"
        onClick={() => setShowDetail(id)}
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail === id && (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 absolute w-full h-auto z-10 top-0 left-0 gap-x-12 text-black bg-gray-100 dark:bg-dark-100 dark:text-white p-4 rounded-md"
        >
          <motion.div variants={fadeInUp}>
            <motion.div variants={fadeInUp}>
              <Image src={Project_img} alt={name} className="w-full h-36" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} animate="visible" initial="hidden">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medum">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <button
              onClick={() => setShowDetail(null)}
              className="absolute top-3 right-3 rounded-full p-1 focus:outline-none bg-gray-200 dark:bg-dark-200"
            >
              <MdClose size={30} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
