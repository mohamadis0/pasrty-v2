"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = () => {
  const [width, setWidth] = useState(0);
  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <>
      <Link href="/">
        <div className="h-5 w-5 lg:h-10 lg:w-10 relative">
        <Image
          src="/images/cupcake.jpg"
          alt="Logo"
          width={width < 1024 ? "50" : "60"}
          height={width < 1024 ? "40" : "60"}
          
        />
        {/* <Image
          src="/images/cupcake.jpg"
          alt="Logo"
          layout="fill"          
        /> */}
        </div>
      </Link>
    </>
  );
};

export default Logo;
