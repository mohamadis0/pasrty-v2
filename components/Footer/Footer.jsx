import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-pink-200 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 lg:mx-40">
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="text-black font-semibold ">Pastry</p>
          <p className="text-black ">
            Delight Your Senses with Heavenly Pastries
          </p>
        </div>
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="text-black font-semibold">Quick Links</p>

          <p className="text-black">
            Profile
          </p>
          <p className="text-black">
            My Orders
          </p>
          <p className="text-black">
            Contact Us
          </p>
          <p className="text-black">
            Career
          </p>
        </div>
        <div className="grid gap-2 md:gap-4 lg:gap-6">
          <p className="visible sm:invisible text-black font-semibold">More</p>

          <p className="text-black">
            About US
          </p>
          <p className="text-black">
            Privacy Policy
          </p>
          <p className="text-black">
            Terms & Conditions
          </p>
          <p className="text-black">
            FAQs
          </p>
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
  );
}

export default Footer;
