const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Supreetha</h1>

        <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-700">
          <li>
            <a
            href='https://drive.google.com/file/d/1I9guo_nno3BtbHjdBO1igManLyGvgoGx/view?usp=drive_link'
            
              target="_blank"
              rel="noreferrer"
              className="hover:text-black"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-black">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-black">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
