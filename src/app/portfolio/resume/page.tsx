/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { languages } from "../../data";
import { tools } from "../../data";
import SkillCard from "@/app/components/SkillCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../../animation";

const Page = () => {
  return (
    <motion.div
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col gap-1 dark:text-white"
    >
      <div className="grid md:grid-cols-2 gap-3 p-2">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <h5 className="font-bold underline">Education</h5>
          <h4 className="font-semibold text-sm mb-1">
            Bachelor's Degree in Software Engineering
          </h4>
          <p className="font-serif text-sm">Kisii University, 2020-2024</p>
          <p className="text-sm">
            Programming Fundamentals, Data Structures and Algorithms Mobile
            Development Machine Learning{" "}
          </p>
          {/* <h4 className="font-semibold text-sm mb-1">
            FreeCodeCamp,Web Development
          </h4>
          <p className="font-serif text-sm">
            Online FreeCodeCamp Bootcamp 2020 - To Date
          </p>
          <p className="text-sm">
            Had enrolled at the FreeCodeCamp online bootcamp for improvement of
            skills. Backend and Frontend Tech Stack
          </p> */}
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <div className="">
            <h5 className="font-bold underline">Experience</h5>
            <div>
              <h4 className="font-semibold">Internship</h4>
              <p className="text-sm font-serif">
                Kisii Teaching And Referral Hospital
              </p>
              <p className=" text-sm">
                Developed stock management system and help in networking,
                Troubleshooting ,Computer repair and maintenace of HMS Software
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-4  p-4">
          <div>
            <h5 className="my-3">Language and Framework</h5>

            <div className="flex flex-col">
              {languages.map((skill, index) => (
                <SkillCard skill={skill} key={index} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3">Tools & softwares</h5>

            <div className="flex flex-col">
              {tools.map((tool, index) => (
                <SkillCard skill={tool} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
