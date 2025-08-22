import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import me from "../assets/me.png";

function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

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
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="w-full min-h-[100dvh] bg-[#fcfe2] flex flex-col items-center justify-center px-4 py-12 border-b"
      id="aboutme"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <motion.p
        className="about-hdr font-didot text-4xl mb-16"
        variants={itemVariants}
      >
        About Me
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 w-[70%]">
        <motion.div
          className="left flex flex-col text-start"
          variants={containerVariants}
        >
          <motion.p
            className="mb-5 font-didot text-5xl font-[500]"
            variants={itemVariants}
          >
            Mikaela <span className=" italic ">Shane </span>
            <motion.span className="block" variants={itemVariants}>
              Estrellanes
            </motion.span>
          </motion.p>

          <motion.p className="desc mb-5" variants={itemVariants}>
            Hi! I'm a third-year Bachelor of Science in Computer Science student
            at De La Salle Lipa with a passion for building creative and
            functional digital experiences. I love coding web applications and
            web-based games, and I enjoy turning ideas into interactive projects
            using modern web technologies.
          </motion.p>

          <motion.p className="desc mb-5" variants={itemVariants}>
            I'm constantly learning and experimenting with new tools to improve
            my skills and bring engaging experiences to life.
          </motion.p>

          <motion.div className="flex gap-4 mt-0" variants={itemVariants}>
            <a
              className="primary-btn hover:scale-105 transition-transform"
              href="https://github.com/mklshane"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="primary-btn hover:scale-105 transition-transform"
              href="https://www.linkedin.com/in/mikaela-shane-estrellanes-1a962b378/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div className="right" variants={imageVariants}>
          <div className="bg border rounded-2xl border-black w-[270px] overflow-hidden">
            <motion.img
              className="profile w-full h-full object-cover"
              src={me}
              alt="Mikaela Shane Estrellanes"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutMe;
