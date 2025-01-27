'use client'
import React from "react";
import Navbar from "../components/Navbar";
// import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  // const router = useRouter();
  return (
    <div className="flex flex-col dark:bg-dark-500">
      <div className="p-4">
        <Navbar />
      </div>

      <AnimatePresence mode="wait">
        <motion.div >{children}</motion.div>
      </AnimatePresence>
    </div>
  );
};

export default layout;
