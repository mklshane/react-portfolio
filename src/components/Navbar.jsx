import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#aboutme" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Observe sections to set active link while scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Section becomes active when 60% visible
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { y: "-100%", transition: { duration: 0.4, ease: "easeInOut" } },
    visible: { y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className="fixed z-50 px-10 py-3 w-full flex justify-center"
      variants={containerVariants}
      initial="visible"
      animate={showNavbar ? "visible" : "hidden"}
    >
      <div className="glass-morphism w-[70%] py-4 rounded-4xl px-10 flex justify-between items-center">
        <p className="font-didot text-xl font-bold">Portfolio</p>

        <div className="flex justify-evenly gap-5 text-sm">
          {links.map((item) => (
            <a
              key={item.name}
              className={`${
                activeLink === item.href
                  ? "text-pink-600 font-bold"
                  : "text-black"
              } hover:text-pink-400 transition-colors`}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
