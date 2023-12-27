
import Link from "next/link";


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
     
       <div
        className={` h-auto ${isOpen ? "block" : "hidden"}`}
      >
        <ul>
          <li>
            <Link
              href="/home"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-pink-300 transition duration-200"
              onClick={toggle}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/sweets"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-pink-300 transition duration-200"
              onClick={toggle}>
              Sweets
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-pink-300 transition duration-200"
              onClick={toggle}>
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="flex justify-center font-['spectral'] text-sm px-2 py-2 text-black hover:bg-pink-300 transition duration-200"
              onClick={toggle}>
              Login
            </Link>
          </li>
        
        </ul>
      </div>
    </>
  );
};

export default Sidebar;