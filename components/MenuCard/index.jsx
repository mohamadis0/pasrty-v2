import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";

function MenuCard() {
  return (
    <div className="flex  h-48 w-80">
      <div className=" flex  basis-1/4 justify-center">
        <FaRegHeart size={"25px"} className="mx-4 text-gray-400" />
      </div>
       
      <div className="flex flex-col basis-3/4  ">
      
        <div className="relative border-2 border-black rounded-full ml-8 w-2/3 h-2/3">
          <Image
          src={"/images/Bread.png"}
          alt={"name"}
          layout="fill"
          objectFit="cover"
        />
        </div>
        <p className="flex justify-center font-mono lg:text-xl ">cheese</p>
        <p className="flex justify-center font-mono lg:text-xl text-pink-500">usd</p>
      </div>
      <div className=" flex basis-1/4">
        <MdOutlineShoppingCart size={"25px"} className="mx-4" />
      </div>
    </div>
  );
}

export default MenuCard;
