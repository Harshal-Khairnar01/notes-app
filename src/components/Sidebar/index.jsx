import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

import { RiInboxArchiveLine } from "react-icons/ri";
import { MdLabelImportantOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    return `${
      isActive
        ? "bg-[var(--color-head)] dark:bg-[var(--color-head-d)] text-white dark:text-black"
        : "text-black dark:text-white bg-[var(--color-muted)] dark:bg-[var(--color-muted-d)] "
    } 
      flex items-center gap-2 px-3 py-2 dark:hover:bg-[var(--color-head-d)]   hover:bg-[var(--color-head)] hover:text-white dark:hover:text-black transition-colors rounded-r-full`;
  };

  return (
    <aside className="fixed top-[64px] left-0 h-[calc(100vh-64px)] w-[80px] lg:w-[160px]  shadow-md p-4 flex flex-col gap-6 overflow-y-auto bg-[var(--color-primary)] dark:bg-[var(--color-primary-d)]">
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
