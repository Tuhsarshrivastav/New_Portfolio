import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600  body-font border-b border-gray-100">
      <div className="container mx-auto flex  p-5 flex-row md:flex-row items-center">
        <a className="flex title-font font-medium md:w-1/7 w-full items-center  text-gray-900 mb-4 md:mb-0 ">
          <img
            className=" hover:opacity-50 cursor-pointer w-12 h-12 rounded-full border
            border-gray-600"
            src="/my.jpg"
            alt="logo"
            loading="eager"
          />

          <span
            className="md:ml-3 ml-11
           text-xl text-gray-900   "
          >
            Tushar Shrivastav
          </span>
        </a>
        <nav className="md:ml-auto flex text-center  items-center text-base justify-center">
          <a
            href="https://github.com/Tuhsarshrivastav?tab=repositories"
            className="md:mr-5 ml-2 hover:text-gray-900 hover:scale-105
            transform transition duration-300 ease-out"
          >
            <img
              className="md:w-8 w-12 pb-4 md:pb-0 cursor-pointer"
              src="icons/github-icon-1.svg"
              alt="github"
              loading="eager"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-shrivastava-2b23691b2"
            className="md:mr-5 ml-4 hover:text-gray-900 cursor-pointer hover:scale-105
            transform transition duration-300 ease-out"
          >
            <img
              className="md:w-8 w-12 pb-4 md:pb-0  cursor-pointer"
              src="icons/linkedin-icon-2.svg"
              alt="linkedin"
              loading="eager"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
