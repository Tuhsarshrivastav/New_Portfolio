import React from "react";
import { languages } from "../Data/resume_data";
const Skills = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <h1 className="text-center title-font sm:text-4xl text-3xl py-8 font-medium text-gray-900">
        My Tech Stack
      </h1>
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
          {languages.map(({ name, icon }, index) => (
            <div
              key={index}
              className="lg:w-1/4  p-4 md:w-12 w-1/3 hover:scale-105
            transform transition duration-300 ease-out "
            >
              <a
                href="#"
                className="block relative h-14 rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block "
                  src={icon}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-500 title-font text-lg font-medium text-center ">
                  {name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
