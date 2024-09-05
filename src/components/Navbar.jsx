import React from "react";
//import logo from '../images/moryalogo.png';

const Navbar = () => {
  return (
    <div>
      <header className="flex sticky top-0 justify-between items-center  py-6 px-8 md:px-32 drop-shadow-md">
        {/* <img className="w-24" src={logo} alt="Logo-image" /> */}
        <h1 className="xl:flex text-5xl font-bold p-3 transition-all">LOGO</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              className="text-2xl p-3 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl p-3 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              About Us
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-2xl p-3 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Portfolio&#9662;
            </a>
            {/*  <ul className="absolute left-0 mt-2 w-48  text-white border rounded-md border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <li className="relative group">
                <a
                  href="#"
                  className="block px-2 py-2 rounded-md text-black border bg-[#e6d1be] border-black text-lg font-semibold hover:bg-sky-500 hover:text-xl transition-all"
                >
                  On Going
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="block px-2 py-2 rounded-md text-black border bg-[#e6d1be] border-black text-lg font-semibold hover:bg-sky-500 hover:text-xl transition-all"
                >
                  Completed
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <a
              href="#"
              className="text-2xl p-3 hover:bg-green-600 hover:text-white font-semibold rounded-md transition-all"
            >
              Contacts Us
            </a>
          </li>
        </ul>
        <i className="bx bx-menu md:hidden text-5xl cursor-pointer"></i>
      </header>
    </div>
  );
};

export default Navbar;
