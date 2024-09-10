import React from "react";
import logo from "../images/navlogo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-3 px-6 md:px-16 bg-gray-200 shadow-lg transition-shadow duration-300">
      {/* Logo */}
      <img className="w-20 md:w-24 cursor-pointer" src={logo} alt="Logo" />

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 items-center">
        <a
          href="#"
          className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#"
          className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
        >
          Contact Us
        </a>
      </nav>

      {/* Phone Icon and Number */}
      <a
        href="tel:+919595959595"
        className="hidden md:flex items-center space-x-2 text-lg lg:text-xl font-medium hover:bg-[#dd751e] hover:text-white py-2 px-4 rounded-lg transition-all duration-300"
      >
        <i className="bx bxs-phone text-2xl"></i>
        <span>9595959595</span>
      </a>

      {/* Hamburger Menu for Mobile */}
      <i className="md:hidden bx bx-menu text-4xl cursor-pointer hover:text-[#dd751e] transition duration-300"></i>
    </header>
  );
};

export default Navbar;
