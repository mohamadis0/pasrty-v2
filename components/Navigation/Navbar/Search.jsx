import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { LuSearch } from "react-icons/lu";

function Search() {
  const [activeLink, setActiveLink] = useState(false);

  const handleLinkClick = () => {
    setActiveLink(!activeLink);
  };
  return (
    <div className="flex">
      <button>
        <MdOutlineSearch
          size={"20px"}
          className={`text-slate-500  ${
            !activeLink ? "block" : "hidden"
          }`}
          onClick={() => handleLinkClick()}
        />
      </button>
      <div className={`h-10  border-2 rounded-xl border-pink-600 grid place-items-center ${activeLink ? "block" : "hidden"}`}>
        <div className="flex">
        <input type="text" className="w-52 h-fill focus:outline-none text-xs rounded-xl pl-3 placeholder:text-pink-600 placeholder:font-serif" placeholder="Search For Products" />
        <LuSearch size={"15px"} className="mx-3" onClick={() => handleLinkClick()} />
      </div></div>
    </div>
  );
}

export default Search;
