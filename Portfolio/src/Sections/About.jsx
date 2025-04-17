import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  // Counter animation effect
  const [projects, setProjects] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 10 ? prev + 1 : 10));
      setExperience((prev) => (prev < 6 ? prev + 1 : 6));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <section className="min-h-screen flex flex-col md:flex-row items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-200 px-6">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-left" data-aos="fade-right">
          <h1 className="text-5xl font-extrabold text-[#ffcc00] tracking-wider mb-6">
            About Me
          </h1>

          <p className="text-lg md:text-xl font-medium leading-relaxed hover:text-[#38bdf8] transition-all duration-300">
            I am a{" "}
            <span className="text-[#38bdf8]">B.Tech Computer Science </span>
            student at{" "}
            <span className="text-[#ffcc00]">
              Prestige Institute of Management and Research, Bhopal
            </span>
            , passionate about software development and solving complex
            problems.
          </p>

          <p className="mt-4 text-lg md:text-xl font-medium leading-relaxed hover:text-[#ffcc00] transition-all duration-300">
            As a <span className="text-[#38bdf8]">MERN Stack Developer</span>, I
            love building modern and scalable web applications.
          </p>

          <p className="mt-4 text-lg md:text-xl font-medium leading-relaxed hover:text-[#38bdf8] transition-all duration-300">
            Apart from development, I have a keen interest in
            <span className="text-[#38bdf8]"> Data Structures & Algorithms</span> and
            <span className="text-[#ffcc00]"> Cybersecurity</span>.
          </p>

          {/* Dynamic Stats Counter */}
          <div className="mt-6 flex space-x-12" data-aos="fade-up">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#ffcc00]">{projects}+</h2>
              <p className="text-lg text-gray-400">
                Personal & Academic Projects
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#38bdf8]">{experience}</h2>
              <p className="text-lg text-gray-400">Months Experience</p>
            </div>
          </div>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 text-lg font-semibold bg-[#ffcc00] text-[#0f172a] rounded-full shadow-lg hover:bg-[#ffd700] transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            View My Work
          </a>
        </div>

        {/* Right Side - Tech Stack Icons */}
        <div
          className="md:w-1/2 flex flex-wrap justify-center mt-10 md:mt-0 gap-6"
          data-aos="fade-left"
        >
          <div className="grid grid-cols-3 gap-6 bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <div className="text-5xl text-[#61DBFB] hover:scale-110 transition">
              <FaReact />
            </div>
            <div className="text-5xl text-[#68A063] hover:scale-110 transition">
              <FaNodeJs />
            </div>
            <div className="text-5xl text-[#F7DF1E] hover:scale-110 transition">
              <FaJs />
            </div>
            <div className="text-5xl text-[#E34F26] hover:scale-110 transition">
              <FaHtml5 />
            </div>
            <div className="text-5xl text-[#264DE4] hover:scale-110 transition">
              <FaCss3Alt />
            </div>
            <div className="text-5xl text-[#4DB33D] hover:scale-110 transition">
              <SiMongodb />
            </div>
            <div className="text-5xl text-[#06B6D4] hover:scale-110 transition">
              <SiTailwindcss />
            </div>
            <div className="text-5xl text-[#181717] hover:scale-110 transition">
              <FaGithub />
            </div>
            <div className="text-5xl text-[#FFA500] hover:scale-110 transition">
              <FaDatabase />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
