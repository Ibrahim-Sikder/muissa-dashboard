"use client";

import Container from "@/components/ui/HomePage/Container/Container";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assets/logo/logo.png";
import Image from "next/image";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
 
import Link from "next/link";
 

 


const Header = () => {
 
  const [mobileMenu, setMobileMenu] = useState(true);
 
 

  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    // console.log("menu click ");
  };

 

 
 

  

  return (
    <header>
       
      <Container className="headerWrap ">
        <div className=" flex items-center justify-between px-5 xl:px-0  ">
          <Link href="/">
            <div className="flex items-center ">
              <Image
                className="w-10 md:w-16 mr-2 rounded-full "
                src={logo}
                alt="logo"
              />

              <div>
                <h3 className="text-sm md:text-xl lg:text-2xl">Muissa</h3>
                 
              </div>
            </div>
          </Link>
          <div className="xl:flex items-center  space-x-6  hidden ">
            <div className="flex ">
              <FaPhoneVolume className="headerIcon -rotate-45 mr-2" />
              <div>
                <b className="block text-sm"> 09613-244844 </b>
                <span>(Mon-Sat)</span>
              </div>
            </div>
            <div className="flex ">
              <FaEnvelope className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">Mail us for help </b>
                <small>muissaltd@gmail.com</small>
              </div>
            </div>
            <div className="flex ">
              <HiOutlineLocationMarker className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">House-08, Road-07, Block-C, </b>
                <span> Banasree,Dhaka-1219</span>
              </div>
            </div>
          </div>

          <div onClick={toggleMobileMenu} className="xl:hidden block">
            {mobileMenu ? (
              <HiOutlineMenu size={30} />
            ) : (
              <HiOutlineX size={30} />
            )}
          </div>
        </div>
       
         
      </Container>
    </header>
  );
};

export default Header;
