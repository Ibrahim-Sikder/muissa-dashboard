/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import "./Client.css";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import Container from "../Container/Container";
import user from "../../../../assets/news/user.jpg";
import Image from "next/image";
import { FormatQuote } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,  Autoplay } from "swiper/modules";

const Client = () => {
  const clientData = [
    {
      id: 1,
      name: "জাহিদুল ইসলাম",
      position: "CEO, ABC ট্রেডিং",
      review:
        '"Muissa এর সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট। তাদের প্রোডাক্ট সাপোর্ট এবং মার্কেটিং সাপোর্ট আমাদের ব্যবসায় উল্লেখযোগ্য প্রবৃদ্ধি এনে দিয়েছে। তাদের টিম খুবই পেশাদার এবং প্রতিটি সমস্যা দ্রুত সমাধান করতে সক্ষম।"',
      img: user,
    },
    {
      id: 2,
      name: "জাহিদুল ইসলাম",
      position: "CEO, ABC ট্রেডিং",
      review:
        '"Muissa এর সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট। তাদের প্রোডাক্ট সাপোর্ট এবং মার্কেটিং সাপোর্ট আমাদের ব্যবসায় উল্লেখযোগ্য প্রবৃদ্ধি এনে দিয়েছে। তাদের টিম খুবই পেশাদার এবং প্রতিটি সমস্যা দ্রুত সমাধান করতে সক্ষম।"',
      img: user,
    },
    {
      id: 3,
      name: "জাহিদুল ইসলাম",
      position: "CEO, ABC ট্রেডিং",
      review:
        '"Muissa এর সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট। তাদের প্রোডাক্ট সাপোর্ট এবং মার্কেটিং সাপোর্ট আমাদের ব্যবসায় উল্লেখযোগ্য প্রবৃদ্ধি এনে দিয়েছে। তাদের টিম খুবই পেশাদার এবং প্রতিটি সমস্যা দ্রুত সমাধান করতে সক্ষম।"',
      img: user,
    },
    {
      id: 4,
      name: "জাহিদুল ইসলাম",
      position: "CEO, ABC ট্রেডিং",
      review:
        '"Muissa এর সাথে কাজ করে আমরা অত্যন্ত সন্তুষ্ট। তাদের প্রোডাক্ট সাপোর্ট এবং মার্কেটিং সাপোর্ট আমাদের ব্যবসায় উল্লেখযোগ্য প্রবৃদ্ধি এনে দিয়েছে। তাদের টিম খুবই পেশাদার এবং প্রতিটি সমস্যা দ্রুত সমাধান করতে সক্ষম।"',
      img: user,
    },
  ];

  return (
    <div className="clientWraps sectionMargin pt-24">
      <Container>
        <SectionTitle
          title="We are dedicated to satisfy clients"
          subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind."
        />
        <Swiper
          spaceBetween={30}
   
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
          breakpoints={{
         
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 1,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
      
          modules={[Pagination, Autoplay]}
          className="mySwiper clientSlider"
        >
          {clientData.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="clientCard mt-20">
                <div className="quoteWrap">
                  <FormatQuote sx={{ fontSize: "50px" }} />
                </div>
                <div className="clientContent">
                  <p className="leading-7">{data.review}</p>
                  <div className="clientWrap">
                    <div className="clientImgWraps">
                      <Image width={50} height={50} src={data.img} alt="user" />
                    </div>
                    <div>
                      <h4>{data.name}</h4>
                      <small>{data.position}</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Client;
