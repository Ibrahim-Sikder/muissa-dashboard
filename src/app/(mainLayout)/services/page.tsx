"use client";

import React, { useEffect, useState } from "react";
import "./services.css";
import {
  Box,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Drafts,
  Forward,
  LocalPhone,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import service from "../../../assets/logo/service4.jpg";
import SpecialSupport from "./_component/Services/SpecialSupport";
import ServiceSlider from "./_component/Services/ServiceSlider";
import Container from "@/components/ui/HomePage/Container/Container";
import { ErrorMessage } from "@/components/error-message";
import DOMPurify from "dompurify";

import ReactHtmlParser from "react-html-parser";
import ServiceData from "./_component/Services/ServiceData";

const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-3xl font-bold mb-4">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-2xl font-bold mb-3 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    }

    // else if (element.type === "img") {
    //   return (
    //     <img
    //       key={index}
    //       className="w-full h-auto object-cover mb-4 hidden "
    //       src={element.props.src}
    //       alt="Blog Image"
    //     />
    //   );
    // } 

    else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};




const Page = () => {




  const tabStyle = {
    background: '#00305C',
  };

  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent">
          <h1>Our Services</h1>
        </div>
      </div>

      <Container className="sectionMargin">
        <ServiceData />
      </Container>
    </>
  );
};

export default Page;
