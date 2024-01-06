"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { usePathname, } from 'next/navigation'

const Breadcrumbs = () => {
  const [activeLink, setActiveLink] = useState(null);
  const path = usePathname();

  useEffect(() => {
    setActiveLink(path)
  }, [path])

  return (
    <div className="flex items-center mx-14 mt-16">
      <Link
        href="/cart"
        className={`font-serif  ${
          activeLink === "/en/cart" || activeLink === "/ar/cart"
            ? " text-pink-600 lg:text-md font-semibold "
            : ""
        }`}
      >
        Review Order
      </Link>
      <MdArrowForwardIos size={"20px"} />

      <Link href="/cart/billing-details"
      className={` font-serif ${
        activeLink === "/cart/billing-details" || activeLink === "/ar/cart/billing-details"
          ? " text-pink-600 lg:text-md font-semibold"
          : ""
      }`}
      >Billing Details</Link>
      <MdArrowForwardIos size={"20px"} />

      <Link href="/cart/confirmation"
        className={` font-serif ${
            activeLink === "/cart/confirmation" || activeLink === "/ar/cart/confirmation"
              ? " text-pink-600 lg:text-md font-semibold"
              : ""
          }`}
          >Confirmation</Link>
    </div>
  );
};

export default Breadcrumbs;
