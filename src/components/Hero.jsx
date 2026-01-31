import React from "react";

const Hero = () => {
  return (
    <div>
      <section 
      className="min-h-screen pt-24 flex flex-col items-center justify-center text-center px-4 gap-6
      bg-gradient-to-br from-indigo-600 via-white to-pink-50">

        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">Supreetha Kharvi</h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Frontend Developer | React | Redux | Tailwind CSS
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href='https://drive.google.com/file/d/1I9guo_nno3BtbHjdBO1igManLyGvgoGx/view?usp=drive_link'
            
             target="_blank"
              rel="noreferrer"
            className="px-6 py-2 bg-black text-white rounded transition hover:scale-105"
          >
            View Resume
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
