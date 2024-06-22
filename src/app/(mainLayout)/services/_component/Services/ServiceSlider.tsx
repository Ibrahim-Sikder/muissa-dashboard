"use client";
import * as React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ServiceSlider() {
  const services = [
    {
      title: " Business Growth",
      description:
        "Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for  a fulfilling lifestyle.",
    },
    {
      title: " Success Fulfill",
      description:
        "Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for  a fulfilling lifestyle.",
    },
    {
      title: "Startup Business ",
      description:
        "Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for  a fulfilling lifestyle.",
    },
    {
      title: "Leadership Work ",
      description:
        "Comprehensive assistance tailored to individual needs, ensuring well-being and independence. Empowering clients with compassionate care solutions for  a fulfilling lifestyle.",
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <Card
            variant="outlined"
            sx={{
              width: "100%",
              borderRadius: "20px",
              background: "#00305C",
              color: "#fff",
              padding: "10px",
              height: "200px",
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                sx={{ marginBottom: "5px" }}
                variant="h5"
                component="div"
              >
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: "25px" }}>
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
