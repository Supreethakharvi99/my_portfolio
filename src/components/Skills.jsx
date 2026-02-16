import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiVercel, SiFirebase, SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

const skills = {
  Frontend: [
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  ],
  Testing: [
    { name: "Jest", icon: <SiJest className="text-red-400" /> },
    { name: "Cypress", icon: <TbBrandCypress className="text-emerald-400" /> },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white">
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto mt-4 rounded-full"></div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group relative bg-white/10 backdrop-blur-xl
              border border-white/20 rounded-2xl p-6
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl 
              border border-transparent 
              group-hover:border-indigo-400/40 transition"></div>

              <h3 className="text-xl font-semibold text-indigo-300 mb-5">
                {category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3
                    bg-black/30 rounded-xl px-4 py-2
                    text-gray-200 hover:bg-black/50 transition"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
