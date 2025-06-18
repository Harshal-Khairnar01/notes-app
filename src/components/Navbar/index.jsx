import React from "react";

import logo from "../../assets/logo.png";
import { useTheme } from "../../context/theme.context";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--color-primary)] dark:bg-[var(--color-primary-d)]  z-10 shadow-md flex  items-center justify-between p-4  h-[64px]">
      <div className=" flex gap-4">
        <div className=" w-10 h-10 ">
          <img src={logo} className="  w-full" alt="momochive" />
        </div>
        <h1 className=" text-2xl text-black dark:text-white  font-semibold">Memochive</h1>
      </div>

      <div className="relative">
        <button
          onClick={toggleTheme}
          className="w-14 h-8 flex items-center px-1 rounded-full transition-all duration-300 ease-in-out
               bg-gray-300 dark:bg-gray-400 shadow-inner"
        >
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300 ease-in-out
        ${
          theme === "dark"
            ? "translate-x-6 bg-yellow-200"
            : "translate-x-0 bg-gray-100"
        }`}
          >
            {theme === "dark" ? (
              <FiSun
                size={16}
                className="text-pink-600 transition-opacity duration-300"
              />
            ) : (
              <FiMoon
                size={16}
                className="text-purple-900 transition-opacity duration-300"
              />
            )}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
