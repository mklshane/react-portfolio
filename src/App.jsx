import AboutMe from "./components/AboutMe"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <Hero />
      <AboutMe />
      <Projects
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelectedProject={setSelectedProject}
      />
      <Skills />
      <Contact />

      {/* Modal */}
      {isOpen && selectedProject && (
        <div className="modal fixed inset-0 bg-black/50 flex items-center justify-center z-50 object-contain">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg object-contain flex flex-col">
            <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4 font-didot">{selectedProject.name}</h2>
            <X 
            onClick={() => setIsOpen(false)}
            /></div>
            <img src={selectedProject.image} alt="" className="mb-3" />
            <p className="mb-4">{selectedProject.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tools.map((tool, i) => (
                <span key={i} className="px-2 py-1 bg-gray-200 rounded text-sm">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                GitHub
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                Live Demo
              </a>
            </div>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default App
