import React from "react";
import { languages } from "../Data/resume_data";
import { motion } from "framer-motion";

const Hero = () => {
  const handleEmail = () => {
    window.open("mailto:tusharshrivastav96@gmail.com");
  };
  return (
    <section className="text-[#d1d6dc] body-font">
      <div className="container mx-auto flex px-5 py-8 md:py-20 md:flex-row flex-col items-center">
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <img
            className="w-32 h-32 border-4 border-white   md:hidden  object-cover object-center rounded-full hover:scale-110 mb-6
             transform transition duration-300 ease-in-out cursor-pointer"
            alt="hero"
            src="/my.png"
          />
          <h1 className="title-font sm:text-5x  text-3xl mb-[10px] font-medium text-gray-900 lg:text-5xl ">
            <div
              className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500  mr-1
           bg-clip-text text-transparent "
            >
              Hey i'm Tushar Shrivastava
            </div>
            <span
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mr-1
           bg-clip-text text-transparent "
            >
              A JavaScript Developer
            </span>
          </h1>
          <p className="mb-6 md:text-[23px] text-lg  leading-relaxed ">
            I can help to design and build quality softwares , clean interfaces
            and rich interactive web , mobile and desktop apps targeting
            javascript ecosystem and other opportunities i'm open to learning,
            adapt to work with the team and use skills to solve complex
            development challenges and provide value to the growth of an
            organization .
          </p>

          <div className="flex justify-center ">
            <button
              onClick={handleEmail}
              className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
            >
              Email Me
            </button>
            <a
              href="resume.pdfz"
              download="Full_Stack_Javascript_Developer.pdf"
            >
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2.8 }}
          className="flex flex-wrap justify-center  md:-mt-12
           md:max-w-lg lg:w-full md:w-1/3 w-full lg-min"
        >
          {languages.map(({ name, icon }, index) => (
            <>
              <div key={index} className="flex flex-col z-50 ">
                <img
                  className="lg:h-20 lg:w-24
                md:h-20 p-4 h-24 w-28 md:w-24 object-contain object-center hover:scale-125
                transform transition duration-300 ease-in-out   "
                  src={icon}
                  alt="blog"
                />
                <h6 className="text-center z-50  font-semibold">{name}</h6>
              </div>
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
