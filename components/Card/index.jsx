import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card() {
  return (
    <div className="grid relative justify-items-center mx-14 md:mx-32">
      
      <div
        className="bg-white drop-shadow-2xl rounded-md h-14 w-20 -top-5 md:h-20 md:w-20 md:-top-5 lg:h-28 lg:w-28 lg:-top-9 z-30 flex relative"
      >
        <Image
          src={"/images/croissant1.png"}
          alt={"name"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="z-20 absolute flex flex-col border-4 rounded-md border-[#c9d6cd] h-40 w-40 md:h-52 md:w-52 lg:h-80 lg:w-80">
        <svg 
        className="z-10 absolute"
        viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0, 220 C100, 300 400, 10 700, 400 L500, 0 L0, 0 Z"
            style={{ stroke: "none", fill: "#c9d6cd" }}
          /> 
        </svg>
        <p className="font-serif text-md md:text-lg lg:text-2xl z-20 relative mt-9 mx-11 md:mx-16 md:mt-20 lg:mt-20 lg:mx-[107px]" >Croissant</p>
        <p className="lg:text-3xl font-semibold mt-3  lg:mt-10 flex justify-center ">3.00 USD</p>
        <Link href={"/home"} className="z-20 relative flex justify-center mt-3 mx-8 md:mt-3 md:mx-12 md:p-1 lg:p-4 lg:mt-5 lg:mx-24 rounded-md text-sm lg:text-md border-2 border-[#5b8969] text-[#5b8969] hover:bg-[#5b8969] hover:text-white transition ease-in-out delay-150 hover:translate-x-1 hover:scale-105">Order Now</Link>
      </div>
    </div>
  );
}

export default Card;
