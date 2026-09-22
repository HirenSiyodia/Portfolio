import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems = [
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
<nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Navbar */}
          <div className="flex items-center justify-between h-17">
            <a
              href="#home"
              className="text-blue-400 logo-font text-2xl font-medium whitespace-nowrap cursor-pointer tracking-widest hover:opacity-80 transition-opacity"
            >
              &lt;Hiren Nanubhai Siyodia/&gt;
            </a>
            <ul className="hidden md:flex items-center lg:gap-6">
              {NavItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 nav-font text-base tracking-wider hover:text-blue-400 duration-300 ease-out hover:scale-105 inline-block px-2 py-1 lg:text-lg rounded-md"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-2xl text-slate-200 transition-colors hover:text-indigo-400 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
          {/* Mobile Menu */}{" "}
          {isMenuOpen && (
            <div className="border-t border-gray-700 py-4 md:hidden">
              {" "}
              <ul className="flex flex-col items-center gap-2">
                {" "}
                {NavItems.map((item) => (
                  <li key={item.name} className="w-full">
                    {" "}
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className="nav-font block w-full rounded-md px-4 py-3 text-center text-base tracking-widest text-slate-200 transition-colors hover:bg-white/5 hover:text-indigo-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
