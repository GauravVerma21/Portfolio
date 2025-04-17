import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import Profile from "../assets/Profile.jpg";

const roles = [
  "MERN Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
];

const Home = () => {
  return (
    <div id="home">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
        
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-blue-400">Gaurav Verma</span>
          </motion.h1>

        
          <motion.p
            className="text-blue-300 text-lg sm:text-xl font-semibold mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {roles[Math.floor(Math.random() * roles.length)]}
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I am a passionate{" "}
            <span className="text-blue-400">MERN Stack Developer</span> and
            problem solver who loves turning ideas into scalable, efficient web
            applications. With a strong foundation in{" "}
            <span className="text-yellow-400">Data Structures & Algorithms</span>
            , I thrive on solving complex challenges with clean, optimized code.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            My journey in web development began with curiosity and evolved into
            a passion for{" "}
            <span className="text-blue-400">building real-world applications</span>
            . I enjoy exploring{" "}
            <span className="text-yellow-400">Cybersecurity</span> and
            continuously improving my skills to stay ahead in the tech industry.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I'm always looking for new opportunities to collaborate, learn, and
            create innovative solutions. Let's build something amazing together!
            🚀
          </motion.p>

          
          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition duration-300"
            >
              View Portfolio
            </a>
          </motion.div>

        
          <motion.div
            className="flex space-x-6 mt-6 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <a
              href="https://www.linkedin.com/in/gauravverma02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </div>

  
        <motion.div
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={Profile}
            alt="Gaurav"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 
                     rounded-full shadow-lg border-4 border-blue-500 
                     object-contain"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
