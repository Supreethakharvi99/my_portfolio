import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiJest,
  SiGraphql,
  SiWebpack,
  SiBabel,
  SiJira,
  SiVercel,
} from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";
import { MdApi, MdSecurity } from "react-icons/md";
import { DiMysql } from "react-icons/di";
import { FaAws } from "react-icons/fa";


const skills = {
  "Frontend Development": [
    { name: "React.js", icon: <FaReact className="text-sky-400" /> },
    { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  ],

  "API & Data Handling": [
    { name: "REST APIs", icon: <MdApi className="text-green-400" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
    { name: "API Integration", icon: <MdApi className="text-indigo-400" /> },
    { name: "JWT Authentication", icon: <MdSecurity className="text-red-400" /> },
  ],

  Testing: [
    { name: "Jest", icon: <SiJest className="text-red-400" /> },
    { name: "Cypress", icon: <TbBrandCypress className="text-emerald-400" /> },
    { name: "React Testing Library", icon: <SiJest className="text-pink-300" /> },
  ],

  "Backend (Working Knowledge)": [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <FaNodeJs className="text-gray-300" /> },
  ],

  Databases: [
    { name: "SQL", icon: <DiMysql className="text-blue-400" /> },
    { name: "Oracle SQL", icon: <DiMysql className="text-red-400" /> },
  ],

  "Tools & DevOps": [
    { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
    { name: "Webpack", icon: <SiWebpack className="text-blue-400" /> },
    { name: "Babel", icon: <SiBabel className="text-yellow-400" /> },
    { name: "Jira", icon: <SiJira className="text-blue-500" /> },
  ],

  "Cloud & Deployment": [
    
    { name: "AWS (Basic)", icon: <FaAws className="text-orange-400" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto mt-4 rounded-full" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white/10 backdrop-blur-xl
              border border-white/20 rounded-2xl p-6
              hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <h3 className="text-lg font-semibold text-indigo-300 mb-5">
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
