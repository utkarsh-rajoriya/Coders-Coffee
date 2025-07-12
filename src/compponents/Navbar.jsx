import React from "react";

const Navbar = (props) => {
  return <div className="container absolute top-0 pt-[2rem] flex justify-between items-center">
        <h1 className="text-white text-3xl tracking-wide">Coders <span className="text-orange-400">Coffee!</span></h1>
        <div>
        <i class="fa-solid fa-bars text-white text-2xl" onClick={props.openNav}></i>
        </div>
  </div>;
};

export default Navbar;
