import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(AppContext);

  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctors", path: "/doctors" },
    { name: "About", path: "/about" },
    
  ];

  return (
    <nav className="sticky top-0 z-50 px-4 md:px-8 lg:px-12 pt-4">

      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-2xl px-6 md:px-8 py-4">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2563eb] to-cyan-400 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              P
            </span>
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Peri Peri
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Smart Healthcare
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">

          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2563eb]"
                    : "text-gray-700 hover:text-[#2563eb]"
                }`
              }
            >
              {({ isActive }) => (
                <div className="flex flex-col items-center gap-1">
                  <p>{item.name}</p>

                  <span
                    className={`h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#2563eb]"
                        : "w-0 bg-[#2563eb] group-hover:w-full"
                    }`}
                  ></span>
                </div>
              )}
            </NavLink>
          ))}

        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {token && userData ? (
            <div className="relative group">

              <div className="flex items-center gap-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 px-3 py-2 rounded-full">

                <img
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  src={userData.image}
                  alt=""
                />

                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-gray-800">
                    {userData.name}
                  </p>
                </div>

                <img
                  className="w-3 opacity-70"
                  src={assets.dropdown_icon}
                  alt=""
                />
              </div>

              {/* Dropdown */}
              <div className="absolute top-16 right-0 hidden group-hover:block">
                <div className="bg-white shadow-2xl border border-gray-100 rounded-2xl w-56 p-3 flex flex-col gap-2">

                  <button
                    onClick={() => navigate("/my-profile")}
                    className="text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={() => navigate("/my-appointments")}
                    className="text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-200 text-gray-700"
                  >
                    Appointments
                  </button>

                  <button
                    onClick={logout}
                    className="text-left px-4 py-3 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all duration-200 text-gray-700"
                  >
                    Logout
                  </button>

                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:flex items-center justify-center bg-gradient-to-r from-[#2563eb] to-cyan-400 text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </button>
          )}

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setShowMenu(true)}
            className="md:hidden"
          >
            <img className="w-6" src={assets.menu_icon} alt="" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl p-6"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-10">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2563eb] to-cyan-400 flex items-center justify-center">
                    <span className="text-white font-bold">
                      P
                    </span>
                  </div>

                  <h1 className="text-xl font-bold text-gray-900">
                    Peri Peri
                  </h1>
                </div>

                <img
                  onClick={() => setShowMenu(false)}
                  className="w-6 cursor-pointer"
                  src={assets.cross_icon}
                  alt=""
                />
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-3">

                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    onClick={() => setShowMenu(false)}
                    className={({ isActive }) =>
                      `px-5 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#2563eb] text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {!token && (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setShowMenu(false);
                    }}
                    className="mt-4 bg-gradient-to-r from-[#2563eb] to-cyan-400 text-white py-4 rounded-2xl font-semibold shadow-lg"
                  >
                    Get Started
                  </button>
                )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;