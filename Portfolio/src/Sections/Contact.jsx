import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white flex justify-center items-center"
        >
          <motion.div
            className="w-full max-w-lg p-8 rounded-lg bg-[#1e293b] shadow-lg border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="text-center text-4xl font-bold text-yellow-400 mb-6">
              Contact Me
            </h2>

          
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-400 outline-none py-3 px-2 text-lg text-white transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-400 outline-none py-3 px-2 text-lg text-white transition-all placeholder-gray-400"
                />
              </div>

              <div>
                <textarea
                  required
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-gray-500 focus:border-yellow-400 outline-none py-3 px-2 text-lg text-white transition-all placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-[#0f172a] font-bold py-3 rounded-lg hover:bg-yellow-300 transition duration-300"
              >
                Send Message
              </button>
            </form>

            
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://linkedin.com/in/gauravverma02"
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
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Contact;
