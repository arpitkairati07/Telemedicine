import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 px-4 md:px-8">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "py-1 hover:text-blue-600"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "py-1 hover:text-blue-600"
          }
        >
          ALL DOCTORS
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "py-1 hover:text-blue-600"
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 border-b-2 border-blue-600 pb-1"
              : "py-1 hover:text-blue-600"
          }
        >
          CONTACT
        </NavLink>
      </ul>

      {/* Mobile Hamburger Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {/* Simple hamburger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {showMenu ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Nav */}
      {showMenu && (
        <ul className="absolute top-full left-0 w-full bg-white border-t border-gray-300 md:hidden flex flex-col py-4 px-6 gap-4 font-medium z-30">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
            onClick={() => setShowMenu(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
            onClick={() => setShowMenu(false)}
          >
            ALL DOCTORS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
            onClick={() => setShowMenu(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
            onClick={() => setShowMenu(false)}
          >
            CONTACT
          </NavLink>
          {!token && (
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/login");
              }}
              className="text-white bg-[#5f6FFF] px-6 py-2 rounded-full font-light"
            >
              Create an Account
            </button>
          )}
        </ul>
      )}

      {/* Right side: Profile dropdown or Create Account */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="relative group flex items-center gap-2 cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile Picture"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
            <div className="absolute top-10 right-0 text-base font-medium text-gray-600 z-20 hidden group-hover:block transition duration-200 ease-in-out">
              <div className="min-w-48 bg-stone-100 rounded-lg flex flex-col gap-4 p-4 shadow-lg">
                <p
                  onClick={() => navigate("my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => {
                    setToken(false);
                    navigate("/login");
                  }}
                >
                  LogOut
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-white bg-[#5f6FFF] px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create an Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
