import React from "react";

function Navbar() {
  return (
    // positioning of the main container
    <div className=" absolute top-1 w-full ">
      {/* nav Container */}
      <nav className="max-w-6xl mx-auto hidden items-center justify-between md:flex h-20">
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
            className=" bg-transparent border-2 border-custom-blue font-bold text-sm 
          rounded-full mx-2 py-3 px-6 text-custom-blue hover:-translate-y-0.5 transition 
          duration-150 hover:opacity-50 hover:border-custom-yellow hover:text-custom-yellow"
          >
            Log In
          </button>
        </div>
        {/* @todo hamburger menu */}
      </nav>
      {/*  mobile menu */}
    </div>
  );
}

export default Navbar;
