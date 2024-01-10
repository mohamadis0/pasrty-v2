import Link from "next/link";
import { useState } from "react";

function BottomNavigation() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="px-20 h-12 flex items-center justify-between bg-pink-400 sticky bottom-0 z-50">
      <div
        className={`${
          activeLink === "home"
            ? "border-2 border-slate-400 rounded p-2  lg:text-md"
            : ""
        }`}
      >
        <Link href="/home" onClick={() => handleLinkClick("home")}>
          Home
        </Link>
      </div>
      <div
      className={`${
        activeLink === "sweets"
          ? "border-2 border-slate-400 rounded p-2  lg:text-md"
          : ""
      }`}>
         <Link href="/sweets" onClick={() => handleLinkClick("sweets")}>Sweets</Link></div>
      <div>Cart</div>
      <div>
        <button className="outline-none mobile-menu-button ">
          <svg
            className={`w-6 h-6 text-white 
              `}
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
  );
}

export default BottomNavigation;
