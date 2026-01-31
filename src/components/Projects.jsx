import React from "react";

const projects = [
  {
    title: "Redux E-Commerce Application",
    description:
      "A React-based e-commerce application with cart functionality using Redux Toolkit and REST APIs.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "REST API"],
    github: "https://github.com/Supreethakharvi99",
    live: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS to showcase skills and projects.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Supreethakharvi99",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
