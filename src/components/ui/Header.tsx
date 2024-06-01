import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll

// import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            {/* <LogoVPN className="h-8 w-auto" /> */}
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <li>
              <Link href="/">
                <span className="mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Feature
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Testimonial
                </span>
              </Link>
            </li>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <span className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </span>
            </Link>
            <Link href="/">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all">
                Sign Up
              </span>
            </Link>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500"></ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
