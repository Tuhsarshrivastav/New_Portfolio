import { useState } from "react";
import data_projects from "../Data/data_projects";
import { Carousel } from "react-responsive-carousel";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <section className="text-gray-400 bg-white body-font   ">
        <div className="container px-5 py-8 mx-auto">
          <nav className="md:mr-auto md:ml-4 md:py-1 text-gray-900 md:pl-4 	flex flex-wrap items-center text-lg justify-around cursor-pointer  space-x-3 font-medium ">
            <h2
              className={
                active === "All" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800 "
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
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800"
              }
              onClick={() => handleFilterCategory("mern-stack")}
            >
              Mern stack
            </h2>
            <h2
              className={
                active === "react-native" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800 "
              }
              onClick={() => handleFilterCategory("react-native")}
            >
              React-Native{" "}
            </h2>
            <h2
              className={
                active === "node.js" &&
                "title-font text-lg font-medium text-gray-900 cursor-pointer border-b border-gray-800 "
              }
              onClick={() => handleFilterCategory("node.js")}
            >
              node.js
            </h2>
            <h2
              className={
                active === "react.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800 "
              }
              onClick={() => handleFilterCategory("react.js")}
            >
              React.js
            </h2>
            <h2
              className={
                active === "vue.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer  border-b border-gray-800"
              }
              onClick={() => handleFilterCategory("vue.js")}
            >
              Vue.js
            </h2>
            <h2
              className={
                active === "angular" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800"
              }
              onClick={() => handleFilterCategory("angular")}
            >
              Angular
            </h2>
            <h2
              className={
                active === "next.js" &&
                "title-font  font-medium text-gray-900  cursor-pointer border-b border-gray-800"
              }
              onClick={() => handleFilterCategory("nextjs")}
            >
              Next.js
            </h2>
          </nav>
          <div className="flex flex-wrap -m-4">
            {projects.map(
              (
                { name, category, image, deployed_url, image2, tech },
                index
              ) => (
                <div
                  key={index}
                  className="p-4 md:w-1/3 cursor-pointer hover:scale-105
            transform transition duration-300 ease-out mt-8"
                >
                  <div className="h-full border-2 border-gray-300 rounded-sm overflow-hidden">
                    <Carousel
                      infiniteLoop={true}
                      autoPlay={true}
                      showArrows={false}
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                    >
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center hover:opacity-1 "
                        src={image}
                        alt="blog"
                      />
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={image2}
                        alt="blog"
                      />
                    </Carousel>
                    <div className="p-8 bg-slate-50">
                      <h2 className="text-center tracking-widest text-md title-font font-medium text-gray-800 mb-1 pb-1">
                        {category}
                      </h2>
                      <h1 className=" text-center title-font text-lg font-medium text-gray-900 mb-3 pb-2">
                        {name}
                      </h1>

                      <div className="flex items-center justify-around flex-wrap ">
                        <a
                          href={deployed_url}
                          className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                        >
                          Deploy Link
                          <svg
                            className="w-4 h-4 ml-2"
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
                        <img className="w-10 h-8" src={tech?.tach1} alt="" />
                        {tech.tach2 ? (
                          <img className="w-10 h-8" src={tech?.tach2} alt="" />
                        ) : null}
                        {tech.tach3 ? (
                          <img className="w-10 h-8" src={tech?.tach3} alt="" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
