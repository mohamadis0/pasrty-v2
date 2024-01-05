"use client";
import GoogleM from "@/components/GoogleMap";
import GoogleMap from "@/components/GoogleMap";
import Link from "next/link";
import { useState, } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


function SignUp() {
 

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const requirements = [
    // Must be at least 8 characters
    password.length >= 8,
    // Must contain at least 1 uppercase letter
    /[A-Z]/.test(password),
    // Must contain at least 1 lowercase letter
    /[a-z]/.test(password),
    // Must contain at least 1 number
    /\d/.test(password),
  ];
  // If all requirements are met, password is valid
  const isValid = requirements.every(Boolean);

  return (
    <div className="flex justify-center items-center py-10 sm:py-12 md:py-20 lg:py-24 lg:px-12 px-10">
      <div className="md:w-2/3 w-full border-2 border-[#a7bdad] shadow-xl">
        <div className="flex-col mx-8 my-6 sm:mx-12 sm:my-10 md:mx-16 md:my-10 lg:mx-48 lg:my-12">
          <div className="flex justify-between">
            <div>
              <p className="font-normal font-serif text-xl">
                Welcome to Pastry
              </p>
              <p className="font-medium text-2xl lg:text-5xl mt-2">Sign up</p>
            </div>
            <div className="flex-col">
              <p className="text-gray-400 font-serif text-sm">
                Already have an account ?
              </p>
              <Link href="login" className="text-pink-500 font-serif text-sm" >
                Sign in
              </Link>
            </div>
          </div>
          <div className="grid md:mt-10 lg:mt-12 gap-4 ">
            <div className="flex flex-col md:flex-row gap-4">
              <div className=" w-full">
                <p className=" my-2 text-sm font-medium">Name*</p>
                <input
                  type="text"
                  placeholder="Name"
                  className=" text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
                />
              </div>
              <div className=" w-full">
                <p className=" my-2 text-sm font-medium">Contact Number*</p>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
                />
              </div>
            </div>
            <div>
              <p className=" f my-2 text-sm font-medium">Password*</p>
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className=" w-full">
                <p className=" my-2 text-sm font-medium">City*</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
                />
              </div>
              <div className=" w-full">
                <p className=" my-2 text-sm font-medium">Street*</p>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
                />
              </div>
            </div>
            <div className=" w-full">
              <p className=" my-2 text-sm font-medium">Email</p>
              <input
                type="text"
                placeholder="demo@gmail.com"
                className="text-gray-400 font-serif border border-gray-500 rounded-md w-full focus:outline-none focus:ring focus:ring-pink-400 p-3 placeholder:text-sm"
              />
            </div>
            <div className="flex">
            <MdLocationPin size={"25px"} color="#e1478a"/>
            <p className=" font-serif sm:text-sm md:text-md lg:text-lg">Click Here To Pin Your Location</p>
            </div>
           <GoogleM/>
            <div className="border-2 border-[#a7bdad] rounded flex justify-center text-pink-500 mt-8  ">
              <button className="w-full py-2 lg:py-3 hover:bg-slate-200">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
