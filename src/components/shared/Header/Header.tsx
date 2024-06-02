import Container from "@/components/ui/HomePage/Container/Container";
import React from "react";
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
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <header>
      <div className=" bg-[#152644] h-10 ">
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
        <Container   className="headerWrap ">
          <div className=" flex items-center justify-between  ">
            <div className="flex items-center ">
              <Image className="w-16 rounded-full " src={logo} alt="logo" />
              <div>
                <h3>Muissa Consulting </h3>
                <small>Business Solution </small>
              </div>
            </div>
            <div className="flex items-center  space-x-6 ">
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
          </div>
          <div className="menubarWrap flex items-center justify-between ">
            <nav>
              <ul className="flex items-center space-x-5">
                <li>Home </li>
                <li>Membership </li>
                <li>Services </li>
                <li>About Us </li>
                <li>Contact Us </li>
              </ul>
            </nav>
            <Button
      sx={{
        backgroundColor: "white",
        color: "black",
        width: "90px",
        height: "40px",
        borderRadius: '20px' ,
        '&:hover': {
          backgroundColor: "lightgray", 
        },
      }}
    >
      Login
    </Button>
          </div>
        </Container>
     
    </header>
  );
};

export default Header;
