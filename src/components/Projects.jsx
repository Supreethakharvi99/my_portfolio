const projects = [
  {
    title: "Redux E-Commerce Application",
    description:
      "A React-based e-commerce application with cart functionality using Redux Toolkit and REST APIs.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "REST API"],
    github: "https://github.com/Supreethakharvi99",
    status: "",
  },
  {
    title: "Movie Ticket Booking App (MERN)",
    description:
      "A full-stack movie ticket booking application built using the MERN stack. Users can browse movies, view show timings, and book tickets.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Supreethakharvi99/Quick-Show-app-MERN",
    status: "",
  },
  {
  title: "30 Days JavaScript Challenge",
  description:
    "Currently building 30 mini JavaScript projects to strengthen core frontend skills including DOM manipulation, event handling, API integration, local storage, and UI interactions. Completed 10 projects so far.",
  tech: ["JavaScript", "HTML", "CSS"],
  github: "https://github.com/Supreethakharvi99",
  status: "15/30 Completed",
},
  {
    title: "AI Chat Assistant",
    description:
      "A modern AI-powered Q&A web application where users can ask questions and receive intelligent responses instantly. Built with responsive chat UI, API integration, and loading states.",
    tech: ["React", "Tailwind CSS", "REST API", "Vite"],
    github: "https://github.com/Supreethakharvi99",
    status: "In Progress",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white">
          Projects
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-indigo-400/40 transition"></div>

              {/* Header */}
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.status && (
                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 font-medium">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 mt-4 leading-relaxed relative z-10">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-6 relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-medium text-indigo-400 hover:text-indigo-300 transition"
                >
                  Go to GitHub Repo →
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