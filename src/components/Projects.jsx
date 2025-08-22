import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import weflash from "../assets/projects/weflash.png";
import dvd from "../assets/projects/dvd.png";
import timer from "../assets/projects/timer.png";

const projects = [
  {
    image: weflash,
    name: "WeFlash",
    desc: "A web application for creating and generating flashcards for efficient studying.",
    tools: ["ReactJS", "MongoDB", "NodeJS", "Express", "Firebase"],
    github: "https://github.com/mklshane/WeFlash",
    live: "https://weflash-1.onrender.com/",
  },
  {
    image: dvd,
    name: "DVD Eliminator",
    desc: "DVD Eliminator lets users input a list of words or names and watch as they're eliminated one by one—until only one winner remains.",
    tools: ["ReactJS"],
    github: "https://github.com/mklshane/dvd-eliminator",
    live: "https://dvd-eliminator.vercel.app/",
  },
  {
    image: timer,
    name: "Timer Rush",
    desc: "A playful and fast-paced web app designed to test your intuition and timing skills. See how accurately you can stop the timer.",
    tools: [
      "ReactJS",
      "Typescript",
      "MongoDB",
      "NodeJS",
      "Express",
      "Tailwind",
    ],
    github: "https://github.com/mklshane/timer-rush",
    live: "https://timer-rush.onrender.com/",
  },
];

function Projects({isOpen, setIsOpen, setSelectedProject}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  


  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];

  }
  return color;
}

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full min-h-[100dvh] flex flex-col gap-4 justify-center items-center py-12 px-4 bg"
      id="projects"
      ref={ref}
    >
      <motion.p
        className=" font-didot text-4xl md:text-4xl  text-black"
        variants={item}
      >
        Featured Projects
      </motion.p>

      <motion.p
        className="glass-morphism border-white/90 px-4 py-1 font-didot italic"
        variants={item}
      >
        Bringing ideas to life through code and creativity.
      </motion.p>

      <motion.div
        className="proj-container w-full max-w-6xl bg-white border rounded-2xl p-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
      >
        <motion.div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-morphism rounded-2xl overflow-hidden border border-black/20 hover:border-[#E85F98]/50 transition-all duration-300 flex flex-col h-full"
              variants={item}
              whileHover={{ y: -5 }}
            >
              {/* Fixed height image container */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content container with flex-grow */}
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="proj-name text-xl font-bold mb-2 font-didot"
                  onClick={() => {
                    const randomColor = getRandomColor();
                    document.querySelector(
                      ".proj-container"
                    ).style.backgroundColor = randomColor;
                  }}
                >
                  {project.name}
                </h3>
                <p className="text-gray-700 mb-4 flex-grow">{project.desc}</p>

                <button
                  className="primary-btn hover:bg-transparent font-sora"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsOpen(true);
                  }}
                >
                  Read more
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
