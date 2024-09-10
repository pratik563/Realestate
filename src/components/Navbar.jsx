import React from "react";
import logo from "../images/navlogo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-3 px-6 md:px-16 bg-white shadow-md">
      <img className="w-24 md:w-24" src={logo} alt="Logo" />
      <ul className="hidden md:flex space-x-4">
        <li>
          <a
            href="#"
            className="text-xl md:text-2xl p-2 hover:bg-[#dd751e] hover:text-white font-semibold rounded-md transition-all"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xl md:text-2xl p-2 hover:bg-[#dd751e] hover:text-white font-semibold rounded-md transition-all"
          >
            About Us
          </a>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-xl md:text-2xl p-2 hover:bg-[#dd751e] hover:text-white font-semibold rounded-md transition-all"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-xl md:text-2xl p-2 hover:bg-[#dd751e] hover:text-white font-semibold rounded-md transition-all"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="tel: +91 9595959595"
            className="hidden md:inline-block text-xl md:text-3xl font-semibold text-black rounded-md p-1 hover:bg-[#dd751e] hover:text-white transition-all"
          >
            <i class="bx bxs-phone bx-tada"></i>
          </a>
          <i className="bx bx-menu md:hidden text-4xl cursor-pointer"></i>
        </li>
      </ul>

      <i className="bx bx-menu md:hidden text-4xl cursor-pointer"></i>
    </header>
  );
};

export default Navbar;
