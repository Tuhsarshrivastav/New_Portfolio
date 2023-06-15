import data_projects from "../Data/data_projects";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
const Projects = () => {
  const [projects, setProjects] = useState(data_projects);
  const [active, setActive] = useState("All");
  const handleFilterCategory = (name) => {
    const new_array = data_projects.filter((project) =>
      project.category.includes(name)
    );
    setProjects(new_array);
    setActive(name);
  };
  return (
    <div>
      <section className="text-gray-900 mb-2   body-font md:mt-[-80px]   ">
        <div className="container px-5 py-8 mx-auto">
          <motion.nav
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            className="md:mr-auto mb-4 md:mb-2 lg:mb-2   md:py-1 text-gray-900 	flex flex-wrap items-center text-lg justify-center md:justify-start cursor-pointer  space-x-3 font-medium "
          >
            <h2
              className={
                active === "All" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-900 "
              }
              onClick={() => {
                setProjects(data_projects);
                setActive("All");
              }}
            >
              All{" "}
            </h2>
            <h2
              className={
                active === "mern-stack" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-900"
              }
              onClick={() => handleFilterCategory("mern-stack")}
            >
              Mern stack
            </h2>
            <h2
              className={
                active === "react-native" &&
                "title-font  font-medium text-gray-900   cursor-pointer border-b border-gray-900 "
              }
              onClick={() => handleFilterCategory("react-native")}
            >
              React-Native{" "}
            </h2>
            <h2
              className={
                active === "node.js" &&
                "title-font text-lg font-medium text-gray-900 cursor-pointer border-b border-gray-900 "
              }
              onClick={() => handleFilterCategory("node.js")}
            >
              Node.js
            </h2>
            <h2
              className={
                active === "react.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-900 "
              }
              onClick={() => handleFilterCategory("react.js")}
            >
              React.js
            </h2>
            <h2
              className={
                active === "vue.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer  border-b border-gray-900"
              }
              onClick={() => handleFilterCategory("vue.js")}
            >
              Vue.js
            </h2>
            <h2
              className={
                active === "angular" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-900"
              }
              onClick={() => handleFilterCategory("angular")}
            >
              Angular
            </h2>
            <h2
              className={
                active === "next.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-900"
              }
              onClick={() => handleFilterCategory("nextjs")}
            >
              Next.js
            </h2>
          </motion.nav>
          <motion.div
            initial={{ x: 0, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
            whileInView={{ x: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1  -m-4 transform transition-all ease-linear "
          >
            {projects.map(
              ({ name, image, deployed_url, image2, git_url }, index) => (
                <div
                  key={index}
                  className="p-10 md:p-4 md:py-8 pt-4  min-w-[425px] md:w-1/3 lg:w-1/3 cursor-pointer hover:scale-110
                  transform transition duration-300 ease-in-out mt-4  "
                >
                  <div className="h-full shadow-md  rounded-sm overflow-hidden p-4 bg-gray-100 ">
                    <Carousel
                      infiniteLoop={true}
                      autoPlay={true}
                      showArrows={false}
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                    >
                      <img
                        className="lg:h-48 md:w-full md:h-36 h-40 w-full object-fill rounded-md  hover:opacity-1 "
                        src={image}
                        alt="blog"
                      />
                      <img
                        className="lg:h-48 md:h-36 w-full h-40 object-fill rounded-md "
                        src={image2}
                        alt="blog"
                      />
                    </Carousel>
                    <div className="py-6 pb-3 flex px-6 justify-between ">
                      <h1 className=" text-center title-font text-lg font-medium text-[#162433] ">
                        {name}
                      </h1>

                      <div className="flex  justify-around flex-wrap ">
                        <a
                          href={deployed_url ? deployed_url : git_url}
                          className="text-indigo-400 transform transition-all ease-linear hover:text-indigo-600 inline-flex  md:mb-2 lg:mb-0 font-bold"
                        >
                          {deployed_url ? "Deploy Link" : "GitHub_Url"}
                          <svg
                            className="w-4 h-4 ml-2 md:mt-1 "
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
            {/* <div
              className="mx-auto bg-black px-6 py-2 hover:text-white mt-6 rounded-sm
              hover:scale-105
              transform transition duration-300 ease-out"
            >
              <button
                className="items-center font-bold "
                onClick={handleShowMore}
              >
                Show More
              </button>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
