"use client";

import React, { useState } from "react";
import "./services.css";
import { Box, Button, Stack, Typography, Tabs, Tab } from "@mui/material";
import {
  CheckCircle,
  Drafts,
  KeyboardArrowRight,
  LocalPhone,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import service from "../../../assets/logo/service4.jpg";
import service2 from "../../../assets/logo/service5.jpg";
import SpecialSupport from "./_component/Services/SpecialSupport";
import ServiceSlider from "./_component/Services/ServiceSlider";
import Container from "@/components/ui/HomePage/Container/Container";

const serviceDetails = [
  {
    id: 1,
    title: "Sale Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service,
  },
  {
    id: 2,
    title: "Marketing Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service2,
  },
  {
    id: 3,
    title: "Delivery Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service,
  },
  {
    id: 4,
    title: "IT Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service2,
  },
  {
    id: 5,
    title: "Customer Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service,
  },
  {
    id: 6,
    title: "Technical Support",
    description:
      "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
    list: [
      "Professional website design and development",
      "Search Engine Optimization (SEO)",
      "Website maintenance and updates",
      "Landing page creation",
    ],
    image: service2,
  },
];

const Page = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="serviceContent">
          <h1>Marketing Support</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {serviceDetails.map((service, index) => (
                <Tab
                  label={service.title}
                  key={service.id}
                  sx={{
                    color: "#ffffff",
                    background: tabIndex === index ? "#00305C" : "#1591A3",
                    marginBottom: "10px",
                    borderRadius: "5px",

                    "&:hover": {
                      background: "#00305C",
                      color: "#ffffff",
                    },

                    "&.Mui-selected": {
                      background: "#00305C",
                      color: "#ffffff",
                    },
                  }}
                />
              ))}
            </Tabs>
            <Box sx={{ marginTop: "30px" }}>
              <h1>Contact</h1>
              <div className="space-y-3">
                <div className="flex mt-5 items-center">
                  <LocationOn
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    House-08, Road-07, Block-C, <br /> Banasree, Dhka-1219
                  </p>
                </div>
                <div className="flex mt-5 items-center">
                  <LocalPhone
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    <b> Whats App:</b> 01403-852850 <br />
                    <b> Hot Line:</b> 09613-244844
                  </p>
                </div>
                <div className="flex mt-5 items-center">
                  <Drafts
                    sx={{
                      color: "#1591A3",
                      fontSize: "50px",
                      marginRight: "8px",
                    }}
                  />
                  <p>
                    muissaltd@gmail.com <br />
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1>Brochures </h1>
                <p className="mt-3">
                  View our 2024 Medical prospectus of brochure for an easy to
                  read guide on all of the services offer.
                </p>
              </div>
            </Box>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="serviceDetails">
              <div className="serviceDetailsImage">
                <div className="w-full h-96 aspect-video relative">
                  <Image
                    src={serviceDetails[tabIndex].image}
                    alt={serviceDetails[tabIndex].title}
                    width={700}
                    height={475}
                    className="rounded-t-lg h-full w-full object-cover absolute"
                  />
                </div>
              </div>
              <Box
                sx={{
                  padding: "20px 0",
                  background: "#ffffff",
                  borderRadius: "0px 0px 5px 5px",
                }}
              >
                <Typography variant="h4" sx={{ color: "#1591A3" }}>
                  {serviceDetails[tabIndex].title}
                </Typography>
                <Typography variant="body1">
                  {serviceDetails[tabIndex].description}
                </Typography>

                <ul className="mt-5">
                  {serviceDetails[tabIndex].list.map((item, index) => (
                    <li key={index}>
                      <CheckCircle
                        sx={{ color: "#1591A3", marginRight: "8px" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Box>
            </div>
            <SpecialSupport />
            <ServiceSlider />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
