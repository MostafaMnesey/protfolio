import React from "react";
import icon from "../../assets/imgs/icon-bg.png";
import "flowbite/dist/flowbite.css";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="bg-[rgba(0,0,0,0.5)] fixed z-10 top-0 left-0 right-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse active1"
          >
            <div className="scl hover:scale-125 duration-700  flex">
              <img
              src={icon}
              className="h-[80px] "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl px-6 text-white font-semibold whitespace-nowrap dark:text-white">
              Scorpion
            </span>
            </div>
            
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg sm:bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="gallary"
                  className="block py-2 px-3 text-white bg-black rounded hover:text-black hover:bg-white md:bg-transparent md:text-white md:p-3 dark:text-white md:dark:text-blue-500
                  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
                
                >
                  Gallary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about"
                  className="block py-2 px-3 text-white hover:text-black rounded  md:hover:bg-white md:border-0 md:hover:text-black hover:border-white hover:bg-white md:p-3 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="block py-2 px-3 text-white rounded hover:text-black md:hover:bg-white md:border-0 md:hover:text-black hover:border-white hover:bg-white md:p-3 md:transition-[1s] dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                  transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  contact
                </NavLink>
              </li>
              
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
