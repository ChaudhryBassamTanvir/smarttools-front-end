"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome CSS is loaded

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#1D1D1F] text-white p-2 flex items-center justify-between relative pb-2">
      <div className="flex items-center space-x-4">
        <Link href="/" legacyBehavior>
          <a className="  w-24 md:w-auto h-auto">
            <Image
              className="block"
              src="/logo1.png"
              alt="Smart Tools Logo"
              width={120} 
              height={120} 
            />
          </a>
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-white">
          <i className="fa fa-bars"></i> {/*  menu icon */}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } lg:pr-16 md:pr-0 md:flex md:items-center md:space-x-4 mt-2 md:mt-0 absolute md:relative top-full md:top-0 right-0 md:right-auto bg-blue-900 md:bg-transparent w-full md:w-auto z-10`}
      >
        <li className="md:border-none">
          <Link href="/" legacyBehavior>
            <a className="block md:inline-block p-2 md:p-0 text-white hover:text-gray-200">
              Home
            </a>
          </Link>
        </li>
        <li className="md:border-none">
          <Link href="/about" legacyBehavior>
            <a className="block md:inline-block p-2 md:p-0 text-white hover:text-gray-200">
              About
            </a>
          </Link>
        </li>
        <li className="md:border-none">
          <Link href="/contact" legacyBehavior>
            <a className="block md:inline-block p-2 md:p-0 text-white hover:text-gray-200">
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
