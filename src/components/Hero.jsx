import React from "react";

const Hero = () => {
  return (
    <section
      className="min-h-screen pt-32 flex flex-col items-center justify-center 
      text-center px-4 gap-8
      bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"
    >
      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
        Supreetha Kharvi
      </h1>

      {/* Subtitle */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
        Frontend Developer crafting modern, scalable user interfaces using{" "}
        <span className="text-indigo-300 font-medium">React</span>,{" "}
        <span className="text-indigo-300 font-medium">Redux Toolkit</span>, and{" "}
        <span className="text-indigo-300 font-medium">Tailwind CSS</span>
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-5 flex-wrap justify-center">
        <a
          href="https://drive.google.com/file/d/1I9guo_nno3BtbHjdBO1igManLyGvgoGx/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-3 rounded-xl 
          bg-indigo-600/90 text-white font-medium
          hover:bg-indigo-500 hover:shadow-xl hover:scale-105
          transition-all duration-300"
        >
          View Resume
        </a>

        <a
          href="#contact"
          className="px-7 py-3 rounded-xl 
          border border-white/20 text-gray-200 font-medium
          hover:bg-white/10 hover:scale-105
          transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
