"use client";
import React, { FunctionComponent } from "react";
import { ISkill } from "../types";
import { motion } from "framer-motion";

const SkillCard: FunctionComponent<{ skill: ISkill }> = ({
  skill: { name, Icon, level },
}) => {
  const barWidth = `${level}%`;

  console.log(level);

  const variants = {
    hidden: {
      width: 0,
    },
    visible: {
      width: barWidth,
      transition: {
        duration: 0.4,
        type: "spring",
        dumping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <div className="text-white my-1 bg-gray-300 dark:bg-dark-300  rounded-full">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex items-center px-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        style={{ width: `${barWidth}` }}
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default SkillCard;
