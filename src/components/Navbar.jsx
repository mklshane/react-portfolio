import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    name: "About Me",
    href: "#aboutme",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      color: "#3b82f6",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="absolute px-10 py-5 w-full flex justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="glass-morphism w-[70%] py-4 rounded-4xl px-10 flex justify-between items-center">
        <motion.p
          className="font-didot text-xl font-bold"
          variants={itemVariants}
        >
          Portfolio
        </motion.p>

        <div className="flex justify-evenly gap-5 text-sm">
          {links.map((item) => (
            <motion.a
              key={item}
              className="link"
              href={item.href}
              variants={itemVariants}d
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
