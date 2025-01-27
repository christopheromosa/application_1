"use client";
import React, { useState } from "react";
import { projects as projectsData } from "@/app/data";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectNavbar from "@/app/components/ProjectNavbar";
import { Category } from "@/app/types";
import { motion } from "framer-motion";

const Page = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState<Category | "all">("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
    } else {
      const filteredProjects = projectsData.filter((project) =>
        project.category.includes(category)
      );
      setProjects(filteredProjects);
      setActive(category);
    }
  };

  return (
    <motion.div
      className="dark:text-white px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
    >
      <ProjectNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />

      <motion.div className="grid grid-cols-12 my-3 gap-4 relative p-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg "
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Page;
