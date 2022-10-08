import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <header className="text-[#d1d6dc] h-24   body-font  ">
      <div className="container mx-auto flex  p-2 flex-row md:flex-row items-center">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          className="flex w-full items-center"
        >
          <img
            className="lg:w-20 md:mt-2  lg:h-20  md:w-10  md:h-10  hidden md:inline-flex  object-cover object-center rounded-full hover:scale-110 transform transition duration-300 ease-in-out cursor-pointer"
            alt="hero"
            src="/my.png"
          />
        </motion.div>

        <motion.nav
          initial={{ y: -500, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
          className="md:ml-auto m-auto md:m-0  container mx-auto flex text-center  items-center text-base justify-center md:justify-end"
        >
          <a
            href="https://github.com/Tuhsarshrivastav?tab=repositories"
            className="md:mr-5 ml-2 hover:text-gray-900 hover:scale-125
            transform transition duration-300 ease-in-out"
          >
            <img
              className="md:w-12 w-12 pb-4 md:pb-0 cursor-pointer"
              src="icons/github-icon-1.svg"
              alt="github"
              loading="eager"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-shrivastav-2b23691b2"
            className="md:mr-5 ml-4 hover:text-gray-900 cursor-pointer hover:scale-125
            transform transition duration-300 ease-in-out"
          >
            <img
              className="md:w-12 w-12 pb-4 md:pb-0  cursor-pointer"
              src="icons/linkedin-icon-2.svg"
              alt="linkedin"
              loading="eager"
            />
          </a>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
