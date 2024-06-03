import Services from "@/components/ui/HomePage/Services/Services";
import { Box, Button } from "@mui/material";
import React from "react";
import Service from "@/components/ui/HomePage/Services/Service";
import NewsSection from "@/components/ui/HomePage/NewsSection/NewsSection";
import BrandSection from "@/components/ui/HomePage/BrandSection/BrandSection";
import Experience from "@/components/ui/HomePage/Experience/Experience";
import Client from "@/components/ui/HomePage/Client/Client";

import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";

import CTA from "@/components/ui/HomePage/CTA";
import Investment from "@/components/ui/HomePage/Investment/Investment";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";
import Company from "@/components/ui/HomePage/Company/Company";

const Home = () => {
  return (
    <Box>
    
      <HeroSection />

      <Service />
      {/* <Banner/> */}
      <BrandSection />
      {/* <WhyUs/> */}
      <Client />
      <Experience />
      <NewsSection />
      {/* <CTA /> */}
      <Services />
      {/* <Investment /> */}
      <Company />
    </Box>
  );
};

export default Home;
