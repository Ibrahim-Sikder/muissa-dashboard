import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import logo from "../../../assets/logo/logo.jpg";

const Footer = () => {
  return (
    <Box sx={{ background: "#002140", marginTop: '80px', padding: '80px 0px' }}  >
      <Container>
        <div className="flex text-center flex-col md:flex-row justify-center gap-14  md:justify-between text-white  md:text-left ">
          <div className="w-[300px]">
            <div className="flex md:justify-normal justify-center items-center mb-5">
              <Image src={logo} height={50} alt="logo" width={50} />
              <h4 className="text-white ml-2">Muissa Consulting </h4>
            </div>
            <p className="leading-9">
              {" "}
              Elevate your business with our expert support in Product, Sales,
              Marketing, Delivery, IT, Funding, and Investment. Transform
              potential into performance with seamless, tailored solutions.
            </p>
          </div>
          <div className="tex-left">
            <h4>Our Company</h4>

            <ul className="space-y-5 mt-5">
              <li>About Use</li>
              <li>Agency partner </li>
              <li>Case studies </li>
              <li>Careers </li>
              <li>Contact Us </li>
            </ul>
          </div>
          <div className="tex-left">
            <h4>Services</h4>
            <ul className="space-y-5 mt-5">
              <li> Product Support </li>
              <li> Sale Support </li>
              <li>Marketing Support </li>
              <li>Delivery Supports </li>
              <li> IT Support </li>
              <li> Funding Support </li>
              <li> Investment Support </li>
            </ul>
          </div>
          <div className="tex-left">
            <h4>Solutions </h4>
            <ul className="space-y-5 mt-5">
              <li>Business Solutions </li>
              <li>Agency partner </li>
              <li>It Solutions </li>
              <li>Enterprise </li>
            </ul>
          </div>
          <div className="tex-left">
            <h4>Resources </h4>
            <ul className="space-y-5 mt-5">
              <li>Support </li>
              <li>Privacy policy </li>
              <li>FAQs </li>
              <li>Terms & conditions </li>
            </ul>
          </div>
        </div>
        <Box
          sx={{
            border: "1px dashed lightgray",
            marginBottom: "20px",
            marginTop: "100px",
          }}
        ></Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
         
        >
          <Typography component="p" color="white">
            &copy;2024 Muissa Business Consulting Ltd. All Rights Reserved.
          </Typography>

          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
