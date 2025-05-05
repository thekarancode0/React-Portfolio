import { NavLink, useSearchParams } from "react-router-dom";
import "../index.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  
  const handleMenuItemClick =() =>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div
        className={` z-50 w-full h-14
             ${theme ? "bg-gray-900" : "bg-stone-400"}
            ${
              theme ? "text-white" : "text-black"
            } px-10 flex justify-between items-center fixed top-0`}
      >
        <div className="text-3xl font-bold">
          <span className="text-blue-600">K</span>aran
        </div>

        <div className="w-2/5 hidden md:flex justify-around items-center">
          <NavLink

            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black" +
              `text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out `}
            to="/"
          >
            <i className="bx bx-home"></i> Home
          </NavLink>
          <NavLink
             className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black" +
             `text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out `}
           to="/about"
          >
            <i className="bx bx-user"></i> About
          </NavLink>
          <NavLink
             className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black" +
             `text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out `}
           to="/project"
          >
            <i className="bx bx-laptop"></i> Project
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black" +
            `text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out `}
          to="/contact"
          >
            {" "}
            <i className="bx bxs-file-doc"></i> Contact
          </NavLink>
        </div>

        {/* Menu Icon for PHone  */}
        <div className="flex md:hidden absolute right-20">
          <button
            onClick={handleMenuItemClick}
            className="text-3xl text-blue-600"
          >
            <i className="bx bx-menu"></i>
          </button>
        </div>

         {/* side menu dropdown */}
        {menuOpen && (
          <div className="absolute top-16 right-4 border bg-white/20 backdrop-blur-md shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden">
            <NavLink
              className="text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out "
              to="/"
              onClick={handleMenuItemClick}
            >
              <i className="bx bx-home"></i> Home
            </NavLink>
            <NavLink
              className="text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out "
              to="/about"
              onClick={handleMenuItemClick}
            >
              <i className="bx bx-user"></i> About
            </NavLink>

            <NavLink
              className="text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out "
              to="/project"
              onClick={handleMenuItemClick}
            >
              <i className="bx bx-laptop"></i> Project
            </NavLink>

            <NavLink
              className="text-lg font-semibold hover:text-blue-600 transition-colors duration-100 ease-in-out "
              to="/contact"
              onClick={handleMenuItemClick}
            >
              {" "}
              <i className="bx bxs-file-doc"></i> Contact
            </NavLink>
          </div>
        )}

        <button onClick={() => setTheme(!theme)}>
          <img
            className="w-7 transition-all duration-1000 ease-in-out"
            src={theme ? "/React-Portfolio/images/sun.png" : "/React-Portfolio/images/moon.png"}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Navbar;
