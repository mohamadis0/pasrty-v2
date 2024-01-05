"use client"
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import { useState } from "react";

function Navbar({isOpen,toggle}) {

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
       <div className="w-full h-12 md:h-16 xl:h-20 shadow-lg bg-white sticky top-0 z-50">
         <div className=" mx-auto px-16 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />

            <ul className="hidden md:flex gap-x-20 ">
              <li className={`flex items-center  ${
                  activeLink === "home"
                    ? "border-2 border-slate-400 rounded p-2 text-pink-400 lg:text-md"
                    : ""
                }`}>
                <Link href="/home"
                 
                 onClick={() => handleLinkClick("home")}>
                  
                  
                 Home
                </Link>
              </li>
              <li
              className={`flex items-center ${
                activeLink === "sweets"
                  ? "border-2 border-slate-400 rounded p-2 text-pink-400 lg:text-md"
                  : ""
              }`}>
                <Link href="/sweets"
                 onClick={() => handleLinkClick("sweets")}>
                 Sweets
                </Link>
              </li>
              <li
              className={`flex items-center ${
                activeLink === "cart"
                  ? "border-2 border-slate-400 rounded p-2 text-pink-400 lg:text-md"
                  : ""
              }`}>
                <Link href="/cart"
                 onClick={() => handleLinkClick("cart")}>
                  Cart
                </Link>
              </li>
              <li
              className={`flex items-center ${
                activeLink === "login"
                  ? "border-2 border-slate-400 rounded p-2 text-pink-400 lg:text-md"
                  : ""
              }`}>
                <Link href="/login"
                 onClick={() => handleLinkClick("login")}>
                  Sign in
                </Link>
              </li>
              <li className="flex items-center">
                <Search/>
              </li>
            </ul>
            
          
     <div className="md:hidden flex items-center">
            <button
            className="outline-none mobile-menu-button "
            onClick={toggle}
          >
            <svg
              className={`w-6 h-6 text-gray-500 hover:text-pink-400 ${
                isOpen ? "transform rotate-90" : ""
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          </div>
      
          </div>
       </div>
    </div> 
    </>
  );
}

export default Navbar;
