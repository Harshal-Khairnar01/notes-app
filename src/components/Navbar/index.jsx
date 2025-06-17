import React from "react";

import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className=" flex  items-center  p-4 gap-4">
      <div className=" w-10 h-10 ">
        <img src={logo} className="  w-full" alt="momochive" />
      </div>
      <h1 className=" text-2xl">Memochive</h1>
    </header>
  );
};

export default Navbar;
