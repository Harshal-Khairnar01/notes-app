import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineDelete,
} from "react-icons/ai";

import { RiInboxArchiveLine } from "react-icons/ri";
import { MdLabelImportantOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    return `${isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} 
      flex items-center gap-2 px-3 py-2  hover:bg-blue-500 hover:text-white transition-colors rounded-r-full`;
  };

  return (
    <aside className=" flex flex-col gap-6 w-[80px] overflow-hidden  lg:w-[160px]  h-screen p-4">
      <NavLink to="/" className={getStyles}>
        <span>
          <IoHomeOutline size={20} />
        </span>

        <span className=" hidden lg:block">Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyles}>
        <span>
            <RiInboxArchiveLine size={20} />
         
        </span>
        <span className=" hidden lg:block">Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <span>
          <MdLabelImportantOutline size={20} />
        </span>
        <span className=" hidden lg:block">Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <span>
          <AiOutlineDelete size={20} />
        </span>
        <span className=" hidden lg:block">Bin</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
