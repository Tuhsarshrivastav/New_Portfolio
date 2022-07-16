import React from "react";

const Hero = () => {
  const handleEmail = () => {
    window.open("mailto:tusharshrivastav96@gmail.com");
  };
  return (
    <section className="text-gray-600 h[32px] body-font md:mt-8">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-medium text-gray-900">
            Full Stack Javascript Developer
          </h1>
          <p className="mb-10 text-md leading-relaxed">
            I can help to design and build quality softwares , clean interfaces
            and rich interactive web , mobile and desktop apps targeting
            javascript ecosystem and other opportunities i'm open to learning,
            adapt to work with the team and use skills to solve complex
            development challenges and provide value to the growth of an
            organization
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleEmail}
              className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg"
            >
              Email Me
            </button>
            <a href="resume.pdfz" download="resume.pdf">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg cursor-pointer">
                Resume
              </button>
            </a>
          </div>
        </div>
        <div className="mt-20 bg-white">
          <img
            className="  w-16 h-16
          "
            src="/down.png"
            alt="down"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
