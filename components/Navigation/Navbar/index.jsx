"use client"
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";

function Navbar({toggle}) {

  
  return (
    <>
      <div className="w-full h-16 md:h-20 xl:h-28 shadow-lg sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            

            <ul className="hidden md:flex gap-x-6 ">
              <li>
                <Link href="/home">
                  <p className="lg:text-xl">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/sweets">
                  <p className="lg:text-xl">Sweets</p>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <p className="lg:text-xl">Cart</p>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <p className="lg:text-xl">Login</p>
                </Link>
              </li>
              <li>
                <Search/>
              </li>
            </ul>
            
            <button
            type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
      
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
