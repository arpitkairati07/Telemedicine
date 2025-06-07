import React, { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between text-sm py-2 mb-1  px-4 md:px-8 relative">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.Iconlogo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        {["/", "/doctors", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "py-1 hover:text-blue-600"
            }
          >
            {["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"][i]}
          </NavLink>
        ))}
      </ul>

      {/* Hamburger Menu */}
      <button
        className="md:hidden text-gray-700 z-40"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
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
      <ul
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-300 md:hidden flex flex-col py-4 px-6 gap-4 font-medium z-30 transform transition-all duration-300 ease-in-out ${
          showMenu
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {["/", "/doctors", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-600"
            }
            onClick={() => setShowMenu(false)}
          >
            {["HOME", "ALL DOCTORS", "ABOUT", "CONTACT"][i]}
          </NavLink>
        ))}
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

      {/* Profile or Auth Buttons */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="Dropdown Icon"
            />
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-white bg-[#5f6FFF] px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create an Account
          </button>
        )}

        {/* Profile Dropdown */}
        {showDropdown && token && (
          <div className="absolute top-10 right-0 min-w-48 bg-stone-100 rounded-lg flex flex-col gap-4 p-4 shadow-lg text-base font-medium text-gray-600 z-40">
            <p
              onClick={() => {
                navigate("my-profile");
                setShowDropdown(false);
              }}
              className="cursor-pointer hover:text-black"
            >
              My Profile
            </p>
            <p
              onClick={() => {
                navigate("my-appointments");
                setShowDropdown(false);
              }}
              className="cursor-pointer hover:text-black"
            >
              My Appointments
            </p>
            <p
              onClick={() => {
                setToken(false);
                navigate("/login");
                setShowDropdown(false);
              }}
              className="cursor-pointer hover:text-black"
            >
              LogOut
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
