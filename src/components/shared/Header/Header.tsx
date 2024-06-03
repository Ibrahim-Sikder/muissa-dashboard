"use client";

import Container from "@/components/ui/HomePage/Container/Container";
import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa";
import "./Header.css";
import logo from "../../../assets/logo/logo.jpg";
import Image from "next/image";
import {
  HiOutlineLocationMarker,
  HiOutlineMenu,
  HiOutlineMenuAlt1,
  HiOutlineX,
} from "react-icons/hi";
import { Button } from "@mui/material";
import Link from "next/link";
const Header = () => {
  const [user, setUser] = useState({});
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    // navRef.current.classList.toggle("active");
    console.log("menu click ");
  };

  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className=" bg-[#152644] h-10 hidden xl:block">
        <div className=" topBar flex items-center justify-between ">
          <small>House-08, Road-07, Block-C, Banasree,Dhka-1219 </small>
          <div className="flex space-x-3">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <Container className="headerWrap ">
        <div className=" flex items-center justify-between px-5 xl:px-0  ">
          <div className="flex items-center ">
            <Image
              className="w-10 md:w-16 mr-2 rounded-full "
              src={logo}
              alt="logo"
            />
            <div>
              <h3 className="text-sm md:text-xl lg:text-2xl">
                Muissa Consulting{" "}
              </h3>
              <small className="md:mt-0 -mt-2 ">Business Solution </small>
            </div>
          </div>
          <div className="xl:flex items-center  space-x-6  hidden ">
            <div className="flex ">
              <FaPhoneVolume className="headerIcon -rotate-45 mr-2" />
              <div>
                <b className="block text-sm"> 01403-852850 </b>
                <span>(Sat-Thu)</span>
              </div>
            </div>
            <div className="flex ">
              <FaEnvelope className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">muissaltd@gmail.com </b>
                <small>muissaltd@gmail.com</small>
              </div>
            </div>
            <div className="flex ">
              <HiOutlineLocationMarker className="headerIcon mr-2" />
              <div>
                <b className="block text-sm">House-08, Road-07, Block-C, </b>
                <span> Banasree,Dhka-1219</span>
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
        <div
          className={`${
            stickyMenu
              ? "stickyMenu "
              : "menubarWrap flex items-center justify-between  "
          }`}
        >
          <div className={`${stickyMenu ? "stickyContainer " : ""}`}>
            <div className={`${stickyMenu ? "stickyLogo" : ""}`}>
              <div className="flex items-center ">
                <Image
                  className="w-10 md:w-16 mr-2 rounded-full "
                  src={logo}
                  alt="logo"
                />
                <div>
                  <h3 className="text-sm md:text-xl lg:text-2xl">
                    Muissa Consulting{" "}
                  </h3>
                  <small>Business Solution </small>
                </div>
              </div>
            </div>

            <nav>
              <ul className="flex navItems items-center ">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/membership">Membership</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden xl:block">
              <Button
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  width: "90px",
                  height: "40px",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "lightgray",
                  },
                }}
              >
                Login
              </Button>
            </div>
            <div onClick={toggleMobileMenu} className="xl:hidden block">
            {mobileMenu ? (
              <HiOutlineMenu size={30} />
            ) : (
              <HiOutlineX size={30} />
            )}
          </div>
          </div>
        </div>

        <div className={mobileMenu ? `activeMobileMenu` : `mobileMenu`}>
          <div className="flex items-center xl:hidden ">
            <Image className="w-12 mr-2 rounded-full " src={logo} alt="logo" />
            <div>
              <h5>Muissa Consulting </h5>
              <small>Business Solution </small>
            </div>
          </div>
          <nav className="mt-5">
            <ul className="">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/membership">Membership</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
