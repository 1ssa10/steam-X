import React from "react";
import Navigations from "./Navigations";

function Navbar() {
  return (
    <div className="navbar py-4 relative">
      <Navigations className={"font-bold text-2xl"} onhover={"underline"} />
      <div className=" absolute  sm:right-10  right-0  items-center ">
        <button className="bg-custom-blue text-custom-white py-3 px-2 rounded-full text-xl ">
          Get Started
        </button>
      </div>
      <div className=" absolute left-0"></div>
    </div>
  );
}

export default Navbar;
