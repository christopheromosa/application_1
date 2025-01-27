"use client";
import ServiceCard from "@/app/components/ServiceCard";
import { services } from "../../data";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/app/animation";

const page = () => {
  return (
    <motion.div
      className="flex flex-col px-4 flex-grow dark:text-white text-sm"
      variants={routeAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h5 className="font-medium my-4">
        {" "}
        I am currently pursuing B.Tech Degree final year in Software Engineering
        from Kisii University. I have 3 + experience in Web Development and I
        have a YouTube channel where I teach Full Stack Web Development Projects
      </h5>

      <div
        className="bg-gray-400  p-7 flex-grow dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className=" font-bold text-xl my-1">What I Offer</h6>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-3"
        >
          {services.map((service, index) => (
            <motion.div
              variants={fadeInUp}
              key={index}
              className="lg:col-span-1 bg-gray-200 dark:bg-dark-200 rounded-lg"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default page;
