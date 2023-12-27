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
        <Image
          src="/images/cupcake.jpg"
          alt="Logo"
          width={width < 1024 ? "50" : "60"}
          height='5'
          className="relative"
        />
      </Link>
    </>
  );
};

export default Logo;
