import React, { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    // positioning of the main container
    <div className=" absolute top-1 w-full ">
      {/* nav Container */}
      <nav className="">
        {/* desktop */}
        <div className="max-w-6xl mx-auto hidden items-center justify-between md:flex h-20">
          {/* Menu Container */}
          <div className="flex  mx-6 p-3 space-x-6 h-full items-center justify-center ">
            {/* item 1 */}
            <div className="group  hover:-translate-y-0.5 transition duration-150">
              <a
                href="#"
                className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
              >
                about
              </a>
              <div className=" hidden border-b border-2 border-white mx-4 group-hover:block  group-hover:border-custom-yellow"></div>
            </div>

            {/* item 2 */}
            <div className="group  hover:-translate-y-0.5 transition duration-150 ">
              <a
                href="#"
                className="text-white text-center  text-lg font-bold capitalize group-hover:text-custom-yellow"
              >
                events
              </a>
              <div className=" hidden border-b border-2 border-white mx-4 group-hover:block  group-hover:border-custom-yellow"></div>
            </div>

            {/* item 3 */}
            <div className="group  hover:-translate-y-0.5 transition duration-150">
              <a
                href="#"
                className="text-white text-center text-lg font-bold capitalize  group-hover:text-custom-yellow"
              >
                store
              </a>
              <div className=" hidden border-b border-2 border-white mx-4 group-hover:block  group-hover:border-custom-yellow"></div>
            </div>

            {/* item 4 */}
            <div className="group  hover:-translate-y-0.5 transition duration-150">
              <a
                href="#"
                className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
              >
                support
              </a>
              <div className=" hidden border-b border-2 border-white mx-4 group-hover:block  group-hover:border-custom-yellow "></div>
            </div>
          </div>

          {/* buttons Container */}
          <div className="flex mx-2">
            <button
              className="bg-custom-blue font-bold text-sm rounded-full mx-2 py-3 px-6
           text-white hover:-translate-y-0.5 transition duration-150 hover:opacity-50 hover:bg-custom-yellow"
            >
              Get Started
            </button>
            <button
              className=" bg-transparent border-2 border-custom-yellow font-bold text-sm 
          rounded-full mx-2 py-3 px-6 text-custom-yellow hover:-translate-y-0.5 transition 
          duration-150 hover:opacity-50 hover:border-custom-blue hover:text-custom-blue"
            >
              Log In
            </button>
          </div>
        </div>
        {/* @todo hamburger menu */}
        <div className="flex items-center justify-between md:hidden  mx-4 w-fell">
          <h1 className="text-5xl text-white font-bold uppercase text-left">
            steamX
          </h1>
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className={`z-40 block hamburger md:hidden focus:outline-none ${
                openMenu ? "open" : ""
              }`}
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </div>
      </nav>
      {/*  mobile menu */}
      <div
        className={`absolute ${
          openMenu ? "block" : "hidden"
        } top-1 left-1/2 -translate-x-1/2 w-full md:hidden `}
      >
        {/* menu Container */}
        <div
          className=" flex flex-col  bg-custom-black mx-3 py-4 px-4 border border-custom-yellow 
        rounded-lg items-center justify-center space-y-4"
        >
          <div className="group   hover:-translate-y-0.5 transition duration-150">
            <a
              href="#"
              className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
            >
              about
            </a>
          </div>
          <div className="group   hover:-translate-y-0.5 transition duration-150">
            <a
              href="#"
              className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
            >
              events
            </a>
          </div>
          <div className="group   hover:-translate-y-0.5 transition duration-150">
            <a
              href="#"
              className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
            >
              store
            </a>
          </div>
          <div className="group   hover:-translate-y-0.5 transition duration-150">
            <a
              href="#"
              className="text-white text-center  text-lg font-bold capitalize  group-hover:text-custom-yellow"
            >
              support
            </a>
          </div>
          <span className="w-full h-1 bg-custom-yellow "></span>
          <button
            className="bg-custom-blue font-bold text-sm rounded-full mx-2 py-3 px-6
           text-white hover:-translate-y-0.5 transition duration-150 hover:opacity-50 hover:bg-custom-yellow "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
