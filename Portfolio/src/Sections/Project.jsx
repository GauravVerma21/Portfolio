import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Star Advertising",
    description: "An innovative ad management platform for businesses.",
    link: "#",
    borderColor: "from-blue-400 to-blue-600",
    shadowColor: "shadow-blue-500/50",
  },
  {
    title: "Spice Hub",
    description: "An e-commerce store for spices and groceries.",
    link: "#",
    borderColor: "from-yellow-400 to-yellow-600",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    title: "Redux Toolkit Project",
    description: "A state management demo using Redux Toolkit.",
    link: "#",
    borderColor: "from-green-400 to-green-600",
    shadowColor: "shadow-green-500/50",
  },
];

const Project = () => {
  return (
    <>
      <div id="projects">
        <section className="py-16 bg-[#0f172a] text-white flex flex-col items-center">
          {/* Heading */}
          <motion.h2
            className="text-5xl font-extrabold mb-12 text-yellow-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 My Projects
          </motion.h2>

          
          <div className="grid md:grid-cols-3 gap-10 px-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative bg-[#1e293b]/80 backdrop-blur-lg p-6 rounded-xl border-2 border-transparent transition-all duration-300 group shadow-lg hover:${project.shadowColor} 
                hover:border-gradient-to-r ${project.borderColor} transform`}
                initial={{ opacity: 0, y: 40 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-yellow-300 group-hover:text-yellow-400 transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mt-2">{project.description}</p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;

