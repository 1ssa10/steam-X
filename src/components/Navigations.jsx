import React from "react";

function Navigations({ className, onhover }) {
  return (
    <div
      className={`grid grid-cols-4 gap-20 text-custom-white text-center py-2 absolute right-20 sm:right-40  ${className}`}
    >
      <div className={` hover:underline`}>About</div>
      <div>Programs</div>
      <div>Store</div>
      <div>Contact us</div>
    </div>
  );
}

export default Navigations;
