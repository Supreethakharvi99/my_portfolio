const Navbar = () => {
  return (
    <nav
      className="fixed top-0 w-full z-50
      bg-slate-900/70 backdrop-blur-md
      border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-lg text-white">
          Supreetha
        </h1>

        {/* Links */}
        <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
          <li>
            <a
              href="https://drive.google.com/file/d/1pRjugIXnWmaQXS-k8-YLchRg9YjG4ZdI/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              Resume
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
