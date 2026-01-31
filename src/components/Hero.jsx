import React from "react";

const Hero = () => {
  return (
    <div>
      <section 
      className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4 
      bg-gradient-to-br from-indigo-50 via-white to-pink-50">

        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">Supreetha Kharvi</h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Frontend Developer | React | Redux | Tailwind CSS
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/Supreetha_kharvi_SK.pdf"
            download
            className="px-6 py-2 bg-black text-white rounded transition hover:scale-105"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-2 border border-black rounded transition  hover:bg-gray-100"
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
