import React from "react";
import service from "../../../../assets/logo/service.jpg";
import service2 from "../../../../assets/logo/service2.jpg";
import service3 from "../../../../assets/logo/service3.jpg";
import Image from "next/image";
import Container from "../Container/Container";
import NorthIcon from "@mui/icons-material/North";
import "./services.css";
import { Button } from "@mui/material";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Product Support",
      text: " Product support provides assistance and solutions for issues related to a product, ensuring customer satisfaction through            troubleshooting, maintenance, and guidance on proper usage.",
      img: service,
    },
    {
      id: 1,
      title: "Product Support",
      text: " Product support provides assistance and solutions for issues related to a product, ensuring customer satisfaction through            troubleshooting, maintenance, and guidance on proper usage.",
      img: service,
    },
    {
      id: 1,
      title: "Product Support",
      text: " Product support provides assistance and solutions for issues related to a product, ensuring customer satisfaction through            troubleshooting, maintenance, and guidance on proper usage.",
      img: service,
    },
  ];
  return (
    <Container className="sectionMargin">
      <h1 className="text-left mb-10 ">
        We Provide the best <br /> service for Consulting
      </h1>
      {/* {servicesData.map((data) => (
        <div key={data.id} className="grid grid-cols-2 gap-8 mb-10">
          <div className="serviceImgWraps">
            <Image src={service} alt="services" />
          </div>
          <div className="text-left">
            <small>Business</small>
            <h3>Product Support</h3>
            <div className="flex gap-5 items-center mt-5">
              <div className="arrowWraps">
                <NorthIcon sx={{ fontSize: "50px" }} />
              </div>
              <span className="leading-5 w-[400px]">
                Product support provides assistance and solutions for issues
                related to a product, ensuring customer satisfaction through
                troubleshooting, maintenance, and guidance on proper usage.
              </span>
            </div>
          </div>
        </div>
      ))} */}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mb-14">
        <div className="serviceImgWraps">
          <Image src={service} alt="services" />
        </div>
        <div className="text-left">
          <small>Business</small>
          <h3>Product Support</h3>
          <div className="flex gap-5 items-center mt-5">
            <div className="arrowWraps">
              <NorthIcon sx={{ fontSize: "50px" }} />
            </div>
            <span className="leading-5 w-[400px]">
              Product support provides assistance and solutions for issues
              related to a product, ensuring customer satisfaction through
              troubleshooting, maintenance, and guidance on proper usage.
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mb-14">
        <div className="text-left order-2 lg:order-1">
          <small>Business</small>
          <h3> Sales Support </h3>
          <div className="flex gap-5 items-center mt-5">
            <div className="arrowWraps">
              <NorthIcon sx={{ fontSize: "50px" }} />
            </div>
            <span className="leading-5 w-[400px]">
              Product support provides assistance and solutions for issues
              related to a product, ensuring customer satisfaction through
              troubleshooting, maintenance, and guidance on proper usage.
            </span>
          </div>
        </div>
        <div className="serviceImgWraps order-1 lg:order-2">
          <Image src={service2} alt="services" />
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 md:mb-14">
        <div className="serviceImgWraps">
          <Image src={service3} alt="services" />
        </div>
        <div className="text-left">
          <small>Business</small>
          <h3> Marketing Support </h3>
          <div className="flex gap-5 items-center mt-5">
            <div className="arrowWraps">
              <NorthIcon sx={{ fontSize: "50px" }} />
            </div>
            <span className="leading-5 w-[400px]">
              Product support provides assistance and solutions for issues
              related to a product, ensuring customer satisfaction through
              troubleshooting, maintenance, and guidance on proper usage.
            </span>
          </div>
        </div>
      </div>
      <Button sx={{padding:'10px 20px'}}>See all services</Button>
    </Container>
  );
};

export default Services;
