import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-[1210px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2
              data-aos="fade-right"
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              Istiak Ahmed
            </h2>
            <p data-aos="flip-right" className="text-sm mt-2">
              Frontend Developer | React & Next.Js Specialist
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              data-aos="fade-down-right"
              to={"/"}
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              data-aos="zoom-in-down"
              to={"/about"}
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              data-aos="fade-up-left"
              to={"/projects"}
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-110"
            >
              Projects
            </Link>
            <Link
              data-aos="fade-down-left"
              to={"/contact"}
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-110"
            >
              Contact
            </Link>
          </div>

          <div data-aos="fade-up" className="flex gap-4 text-xl" >
            <a
              href="https://github.com/istiakdev"
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/istiak8254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-125"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/istiak8254"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fuchsia-600 transition duration-300 hover:scale-125"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Istiak Ahmed. All rights reserved.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 hover:scale-105"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
