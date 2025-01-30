"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const refreshPage = () =>
    useEffect(() => {
      return (
        <>
          <Navbar />
        </>
      );
    }, []);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r bg-blue-400 flex justify-between">
      <div className="px-10">
        <Image src="/jis_logo.png" width={120} height={120} />
      </div>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white rounded-md md:static md:block md:bg-transparent transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 text-center px-10 text-black  justify-end text-xl">
            <li className="py-2 md:py-0">
              <Link
                href="/"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                Home
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/about"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                About
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/Contacts"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                Contact
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/events"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                Events
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/Global-Partnership"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                Pertnerships
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <Link
                href="/User"
                onClick={refreshPage}
                className="block px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white hover:scale-105 transition transform"
              >
                User
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
