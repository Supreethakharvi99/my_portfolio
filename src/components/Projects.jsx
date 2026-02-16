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
    title: "Movie Ticket Booking App (MERN)",
    description:
      "A full-stack movie ticket booking application built using the MERN stack. Users can browse movies, view show timings, and book tickets. Currently under active development.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Supreethakharvi99/Quick-Show-app-MERN",
    live: "In Progress",
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
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-white">
          Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4 rounded-full"></div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative 
              bg-white/10 backdrop-blur-xl
              border border-white/20
              rounded-2xl p-6
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl 
              border border-transparent 
              group-hover:border-indigo-400/40 transition"></div>

              {/* Header */}
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.live === "In Progress" && (
                  <span className="text-xs px-3 py-1 rounded-full 
                  bg-yellow-500/20 text-yellow-300 font-medium">
                    In Progress
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mt-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full
                    bg-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-6 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  GitHub →
                </a>

                {project.live !== "In Progress" && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
