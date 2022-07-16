import React from "react";
import { Aboutskills } from "../Data/About_data";
const About = () => {
  return (
    <section className="text-gray-600 md:-mt-8 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            What I Can Do
          </h1>
        </div>
        <div className="flex flex-wrap -m-2 ">
          {Aboutskills.map(({ title, about }, index) => (
            <div
              key={index}
              className="p-2 lg:w-1/2 md:w-1/2 w-full hover:scale-105
            transform transition duration-300 ease-out "
            >
              <div className="h-full flex items-center bg-gray-50 border-gray-400 border-1 p-8 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    {title}
                  </h2>
                  <p
                    className="text-gray-500 mt-2
                  "
                  >
                    {about}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
