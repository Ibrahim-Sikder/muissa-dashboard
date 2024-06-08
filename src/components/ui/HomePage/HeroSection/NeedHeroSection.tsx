"use client";

import React from "react";
import "./HeroSection.css";
import hero from "../../../../assets/banner/slider2.png";
import hero2 from "../../../../assets/banner/slider.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      img: hero,
      title: "ব্যবসার সাফল্যের জন্য  ",
      subtitle: "বিশ্বস্ত পরামর্শ সেবা",
      description: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    },
    {
      id: 2,
      img: hero2,
      title: "আপনার ব্যবসায়িক লক্ষ্য ",
      subtitle: "পূরণের সেরা সহযোগী ",
      description: "আপনার ব্যবসার সম্ভাবনাকে সর্বোচ্চ পর্যায়ে নিয়ে যান",
    },
    {
      id: 2,
      img: hero2,
      title: "আপনার ব্যবসার বিকাশে ",
      subtitle: "আমাদের এক্সপার্ট পরামর্শ ",
      description: "আপনার ব্যবসায়িক সাফল্যের পথে বিশ্বস্ত সাথী",
    },
  ];

  const buttonStyle = {
    width: { md: "200px", xs: "140px", xl: "230px" },
    height: { md: "50px", xs: "35px", xl: "50px" },
    fontSize: { md: "16px", xs: "9px", xl: "16px" },
    borderRadius: "30px",
    background: "#1591A3",
  };

  return (
    <div className="heroSectionWrap">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // modules={[Autoplay, Navigation]}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="heroContentWraps">
              <div className="bannerImgWrap">
                <Image src={slide.img} alt="banner" />
              </div>
              <div className="heroContent">
                <div className="space-y- md:space-y-5">
                  <h1 className="animate-fadeInRight">{slide.title}</h1>
                  <h2 className="md:mt-5 text-[#1591A3] animate-fadeInLeft">
                    {slide.subtitle}
                  </h2>
                  <p className="mb-2 md:mb-0 md:mt- animate-fadeInRight">
                    {slide.description}
                  </p>
                  <Button sx={buttonStyle}>Get Membership</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
