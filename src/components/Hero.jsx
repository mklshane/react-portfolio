import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Navbar from "./Navbar";

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative" id="home">
      <Navbar />
      <div className="w-full h-[100dvh] bg flex justify-center items-center border-b">
        <motion.div
          className="p-10 flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="font-didot text-6xl text-bold"
            variants={itemVariants}
          >
            Hi, I'm{" "}
            <motion.span
              className="italic"
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#F59AC0" }}
              transition={{ duration: 0.2 }}
            >
              Shane Estrellanes
            </motion.span>
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-black text-center"
            variants={itemVariants}
          >
            I'm a passionate web developer who loves building interactive,
            accessible, and aesthetically pleasing web applications. My focus is
            on creating clean, maintainable code and user-first designs.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
