'use client'


import React, { useState } from 'react';
import './../globals.css';




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    console.log('Toggle menu clicked'); // Add this line
    setMenuOpen(!menuOpen);
    };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-6">
        <a href="/" className="flex items-center">
          <img src="" className="h-8 mr-3" alt="Repair Ustaad" />
        </a>
        <div className="flex md:order-2"
           >
          <button
            type="button"
            className="w-60 h-14 bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-bold rounded-full text-xl px-4 py-2 text-center mr-3 md:mr-0"
          >
            DOWNLOAD
          </button>
          <button 
            onClick={toggleMenu}
            data-collapse-toggle="navbar-cta"
           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:block md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-bold text-xl p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <li>
              <a
                href="#home"
                className="block py-2 pl-3 pr-4 text-white bg-yellow-300 rounded md:bg-transparent md:text-yellow-500 md:p-0 md:dark:text-yellow-500"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#how"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
              >
                HOW IT WORK
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0"
              >
                ABOUT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
