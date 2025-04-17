import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 flex justify-between items-center px-6 md:px-12 z-50 transition-all duration-300 
      ${scrolling ? "bg-[#0f172a]/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-200 text-lg font-semibold uppercase tracking-wide">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              className={`cursor-pointer px-4 py-2 transition-all duration-300 relative
                before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#ffcc00] 
                before:transition-all before:duration-300 hover:before:w-full hover:text-[#ffcc00] 
                ${activeSection === section ? "text-[#ffcc00]" : ""}`}
              onSetActive={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-200 absolute right-6" onClick={toggleNav}>
        {navOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0f172a] p-6 flex flex-col gap-6 items-center text-gray-200 md:hidden">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-lg font-semibold uppercase cursor-pointer hover:text-[#ffcc00]"
              onClick={() => setNavOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
