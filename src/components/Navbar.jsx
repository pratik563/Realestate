import React from "react";
import logo from "../images/navlogo.png";

const Navbar = () => {
  return (
    <div>
      <header className="flex sticky top-0 justify-between items-center py-3 px-6 md:px-16 drop-shadow-md bg-white">
        <img className="w-28 md:w-36" src={logo} alt="Logo-image" />
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="#"
              className="text-xl md:text-2xl p-2 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl md:text-2xl p-2 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              About Us
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-xl md:text-2xl p-2 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Portfolio&#9662;
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-xl md:text-2xl p-2 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <i className="bx bx-menu md:hidden text-4xl cursor-pointer"></i>
      </header>
    </div>
  );
};

export default Navbar;
