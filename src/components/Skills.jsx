import React from 'react'

const skills = {
  Frontend: [
    "React.js",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ],
  Tools: [
    "Git",
    "GitHub",
    "Vercel",
    "Firebase",
  ],
  Testing: [
    "Jest",
    "Cypress",
    "React Testing Library",
  ],
};
const Skills = () => {
  return (
 <section className="py-16 bg-gray-50" id="skills">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {category}
              </h3>

              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-700"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> 
      </section>
       )
}

export default Skills