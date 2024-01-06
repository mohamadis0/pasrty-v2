"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function page() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center py-10 sm:py-12 md:py-20 lg:py-24 lg:px-12 px-10">
    <div className="md:w-2/3 border-2 border-[#a7bdad] shadow-xl w-full">
      <div className="flex-col mx-8 my-6 sm:mx-12 sm:my-10 md:mx-16 md:my-10 lg:mx-52 lg:my-12">
        <div className="flex justify-between">
          <p className="font-normal font-serif lg:text-xl">Welcome to Pastry</p>
          <div className="flex-col">
            <p className="text-gray-400 font-serif text-sm">No Account ?</p>
            <Link href="signUp" className="text-pink-500 font-serif text-sm">
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex-col ">
          <div>
            <p className="text-gray-500 font-serif my-2 text-sm">
              Enter phone number
            </p>
            <input
              type="text"
              placeholder="Contact Number"
              className="text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
            />
          </div>
          <div className="mt-5">
            <p className="text-gray-500 font-serif my-2 text-sm">
              Enter password
            </p>
            <div className="border border-gray-500 rounded-md flex justify-between">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="●●●●●●●"
                className="placeholder:text-gray-400 font-serif  rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
              />
              <button
                className="grid place-items-center m-3"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <FaEye className="text-gray-300" />
                ) : (
                  <FaEyeSlash className="text-gray-300" />
                )}
              </button>
            </div>
          </div>
          <div className="flex my-3">
            <input
              type="checkbox"
              className=" w-4 h-4 accent-pink-500 border "
            />
            <p className="mx-4 text-xs font-serif text-gray-500">Remember me</p>
          </div>
          <div className="border-2 border-[#a7bdad] rounded flex justify-center text-pink-500 mt-8  ">
            <button className="w-full py-2 lg:py-3 hover:bg-slate-200">
              Sign in
            </button>
          </div>
          <div className="mt-3 grid place-items-center justify-center">
            <p className="text-xs text-gray-500">Sign in with</p>
            <div className="flex gap-3 mt-4">
              <button className="w-28 h-12 lg:w-36 lg:h-12 bg-gray-200 rounded-lg grid place-items-center">
                <FcGoogle size={"35px"} />
              </button>
              <button className="w-28 h-12 lg:w-36 lg:h-12 bg-gray-200 rounded-lg grid place-items-center">
                <FaFacebook size={"35px"} color={"#3b5998"} />
              </button>
            </div>
            
              <p className="font-medium text-xs mt-2">OR</p>
              <p className=" text-xs">Continue as <span className="font-medium">
              <Link href="home" >
                Guest
              </Link></span>
              </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default page;
