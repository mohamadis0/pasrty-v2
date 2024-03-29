"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import BottomNavigation from "../BottomNavigation";

function Footer() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    updateWindowDimensions();
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []); 

  useEffect(
    () => {
      window.addEventListener("resize", updateWindowDimensions);
      return () => {
        window.removeEventListener("resize", updateWindowDimensions);
      };
    },
    []
  );

  return (
    <>
    {dimensions.width <= 995 && <BottomNavigation />}
    {dimensions.width > 995 && (
    <footer className="bg-pink-200 text-white  ">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 lg:mx-40">
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="text-black font-semibold ">Pastry</p>
          <p className="text-black ">
            Delight Your Senses with Heavenly Pastries
          </p>
        </div>
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="text-black font-semibold">Quick Links</p>

          <Link href="profile" className="text-black">
            Profile
          </Link>
          <Link href="orders" className="text-black">
            My Orders
          </Link>
          <Link href="contactUs" className="text-black">
            Contact Us
          </Link>
          <Link href="career" className="text-black">
            Career
          </Link>
        </div>
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="visible sm:invisible text-black font-semibold">More</p>

          <Link href="aboutUs" className="text-black">
            About US
          </Link>
          <Link href="privacyPolicy" className="text-black">
            Privacy Policy
          </Link>
          <Link href="termsAndConditions" className="text-black">
            Terms & Conditions
          </Link>
          <Link href="faqs" className="text-black">
            FAQs
          </Link>
        </div>
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="text-black font-semibold">Install App</p>
          <p className="text-black">From App Store or Google Play </p>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2   gap-10
       pt-2 text-black text-sm pb-8 place-items-center lg:place-items-start lg:gap-[580px] lg:mx-44 "
      >
        <span>© 2023 Pastries V2. All rights reserved.</span>
        <div className="flex gap-4 ">
          <FaGithub size={'15px'} color="#e1478a" />
          <FaLinkedinIn size={'15px'} color="#e1478a" />
        </div>
      </div>
    </footer>
   
   )}
   </>
 );
}

export default Footer;
