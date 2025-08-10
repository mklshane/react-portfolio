import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const skills = [
  { name: "JavaScript" },
  { name: "React", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "Firebase", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Tailwind", category: "frontend" },
  { name: "Java" },
  { name: "Python" },
  { name: "MySQL", category: "database" },
  { name: "VS Code", category: "tools" },
  { name: "Figma", category: "tools" },
];

const duplicatedSkills = [...skills, ...skills];

function Skills() {
  const controls = useAnimation();
  const trackRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controls]);

  return (
    <div className="skills-section w-full h-[45dvh] relative overflow-hidden bg-white flex flex-col justify-center items-center py-[40px]" id="skills">
      <motion.p
        className="font-didot text-4xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & <span className="text-[#E85F98]">Tools</span>
      </motion.p>

      <div className="skills-banner w-full overflow-hidden relative rounded-[20px] mx-auto max-w-[90%]">
        <motion.div
          ref={trackRef}
          className="skills-track flex items-center gap-3 py-[20px] whitespace-nowrap"
          animate={controls}
          onUpdate={(latest) => {
            progressRef.current = parseFloat(latest.x) / -50;
          }}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => {
            const remainingProgress = 1 - (progressRef.current % 1);
            controls.start({
              x: [`${-50 * progressRef.current}%`, "-50%"],
              transition: {
                duration: 20 * remainingProgress,
                ease: "linear",
                repeat: Infinity,
              },
            });
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-item ${skill.category} px-4 py-2 bg-white/80 rounded-full shadow-sm border border-gray-200`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(232, 95, 152, 0.1)",
                borderColor: "#E85F98",
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-medium text-gray-800">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
