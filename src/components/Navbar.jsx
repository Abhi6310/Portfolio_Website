import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //Changing background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Smooth Scroll Helper
  const handleNavClick = (id, title) => {
    setActive(title);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setToggle(false);
  };

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
        transition-colors duration-300
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / Home */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Abhinav Chalise
            <span className="sm:block hidden"> | Software Developer</span>
          </p>
        </Link>
        {/*Desktop Menu*/}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`
                cursor-pointer text-[18px] font-medium
                ${active === title ? "text-white" : "text-secondary"}
                hover:text-white
              `}
              onClick={() => handleNavClick(id, title)}
            >
              {title}
            </li>
          ))}
        </ul>
        {/*Mobile Menu*/}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-white text-[18px] font-medium"
          >
            {toggle ? "Close" : "Menu"}
          </button>

          {toggle && (
            <div className="absolute top-20 right-0 p-6 bg-black bg-opacity-90 rounded-xl z-10">
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map(({ id, title }) => (
                  <li
                    key={id}
                    className={`
                      text-[16px] font-medium cursor-pointer
                      ${active === title ? "text-white" : "text-secondary"}
                    `}
                    onClick={() => handleNavClick(id, title)}
                  >
                    {title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
