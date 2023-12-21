import Image from "next/image";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

function Card({ image, name }) {
  return (
    <div className="grid content-center justify-center w-32 h-32 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-52 lg:h-52 border-2 border-black  hover:opacity-50 hover:bg-pink-200">
      <div className=" w-24 h-24 md:h-28 md:w-28 lg:w-32 lg:h-32 overflow-hidden relative">
        <Image src={image} alt={name} layout="fill" objectFit="cover"/>
      </div>
      
      <p className="m-2 collapse  hover:visible font-mono text-pink-700 ">{name}</p>
    </div>
  );
}

export default Card;
