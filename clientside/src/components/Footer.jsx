import React from "react";
import { assets } from "../assets/assets";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-32 px-4 md:px-8 lg:px-12">

      {/* Main Footer */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white shadow-2xl">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 md:px-14 py-16">

          {/* -------- Brand Section -------- */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-4 mb-6">

              {/* Logo */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-cyan-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">
                  P
                </span>
              </div>

              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Peri Peri
                </h1>

                <p className="text-gray-400 text-sm">
                  Smart Healthcare Platform
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-7 max-w-xl">
              Peri Peri helps patients connect with trusted healthcare
              professionals seamlessly. Book appointments, manage consultations,
              and access healthcare services with a modern and secure experience.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center backdrop-blur-md"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center backdrop-blur-md"
              >
                <FaTwitter />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center backdrop-blur-md"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* -------- Navigation -------- */}
          <div>
            <h2 className="text-lg font-semibold mb-6">
              Navigation
            </h2>

            <ul className="flex flex-col gap-4 text-gray-300">

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Doctors
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                About
              </li>

              <li className="hover:text-white transition-all duration-300 cursor-pointer">
                Contact
              </li>

            </ul>
          </div>

          {/* -------- Contact -------- */}
          <div>
            <h2 className="text-lg font-semibold mb-6">
              Contact
            </h2>

            <div className="flex flex-col gap-4 text-gray-300">

              <p>
                support@periperi.health
              </p>

              <p>
                +91 98765 43210
              </p>

              <p>
                Available 24/7 for assistance
              </p>

            </div>

            {/* CTA */}
            <button className="mt-8 bg-gradient-to-r from-[#2563eb] to-cyan-400 px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Peri Peri. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">

            <p className="hover:text-white cursor-pointer transition-all duration-300">
              Privacy Policy
            </p>

            <p className="hover:text-white cursor-pointer transition-all duration-300">
              Terms of Service
            </p>

          </div>

          {/* Scroll To Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2563eb] transition-all duration-300 flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;