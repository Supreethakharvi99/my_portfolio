import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-white">Contact</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-300 mt-8 mb-10">
          I’m open to Frontend / React Developer opportunities. Feel free to
          reach out.
        </p>

        {/* Contact info */}
        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:supreethakharvi99@gmail.com"
            className="text-lg text-indigo-300 hover:text-indigo-200 transition"
          >
            supreethakharvi99@gmail.com
          </a>

          {/* Social links: icon + name */}
          <div className="flex gap-10 text-gray-300">
            <a
              href="https://github.com/Supreethakharvi99"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition text-lg"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition text-lg"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} Supreetha Kharvi. All rights reserved.
      </footer>
    </section>
  );
};

export default Contact;
