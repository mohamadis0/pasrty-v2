"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Logo from "./Navbar/Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Navbar toggle={toggle} isOpen={isOpen}/>
      <Sidebar  isOpen={isOpen} toggle={toggle} /> 
      
     
      
    </>
  );
};

export default Navigation;