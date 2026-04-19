import React, { useState } from "react";
import ThemeToggle from "../common/ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative text-[20px] pb-1 duration-300
   ${isActive ? "text-fuchsia-600 font-semibold" : "text-gray-400 hover:text-fuchsia-600"}

   after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
   after:h-[2px] after:bg-fuchsia-600 after:transition-all after:duration-300

   ${
     isActive
       ? "after:w-[10%] md:after:w-[50%]"
       : "after:w-0 hover:after:w-[10%] md:hover:after:w-[50%]"
   }
  `;

  return (
    <header className="fixed top-5 left-0 w-full z-50 px-4">
      <nav className="max-w-[1210px] mx-auto flex justify-between items-center px-5 py-3 rounded-2xl bg-white/10 dark:bg-black/30 backdrop-blur-xl shadow-2xl border border-white/20">
        <NavLink to="/">
          <div className="font-bold flex items-center gap-x-2 text-lg dark:text-white">
            <img src="/src/assets/logo.png" alt="logo.png" />
            <h1 className="font-bold text-3xl">
              ISTI<span className="text-fuchsia-600">A</span>K
            </h1>
          </div>
        </NavLink>
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/project" className={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </div>

        
        <div className="flex gap-x-6 items-center">
          <div className="hidden md:block py-[12px] px-[25px] bg-fuchsia-600 text-[18px] font-bold hover:bg-transparent hover:border hover:border-fuchsia-600 hover:text-fuchsia-600 rounded-2xl hover:scale-105 duration-300">
            Hire Me
          </div>

          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black dark:text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden shadow-2xl text-center mt-3 max-w-[1210px] mx-auto rounded-xl p-4 bg-black/70 text-white backdrop-blur-xl flex flex-col gap-4">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/project"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={linkStyle}
          >
            Contact
          </NavLink>

          <div className="mt-3 py-[12px] px-[25px] bg-fuchsia-600 text-white font-bold hover:bg-transparent hover:border hover:border-fuchsia-600 hover:text-fuchsia-600  hover:scale-105 duration-300 rounded-xl">
            Hire Me
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
