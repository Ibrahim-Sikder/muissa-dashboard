'use client'
import React from "react";
import "./NewsSection.css";
import news from "../../../../assets/news/news.jpg";
import Image from "next/image";
import Container from "../Container/Container";
import { Button } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const NewsSection = () => {
  return (
    <Container className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={1000} // Smooth transition speed in milliseconds
        loop={true} // Enable infinite loop mode
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="newsWraps">
            <div className="newsCard">
              <Image src={news} alt="news" />
              <div className="date">
                <h1> 21</h1>
                <small>SEP</small>
              </div>
              <div className="newsContent">
                <h4>Praesent iaculis tortor viverra</h4>
                <p className="my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore...
                </p>
                <Button>
                  Read More{" "}
                  <ArrowBackIos sx={{ fontSize: "15px", marginLeft: "8px" }} />
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </Container>
  );
};

export default NewsSection;
