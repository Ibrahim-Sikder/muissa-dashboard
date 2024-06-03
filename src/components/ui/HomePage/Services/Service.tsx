import { Button } from "@mui/material";
import React from "react";
import Container from "../Container/Container";
import {
  BusinessCenter,
  Inventory,
  ProductionQuantityLimits,
  Storefront,
  TrendingDown,
} from "@mui/icons-material";
import './services.css'
import Link from "next/link";
const Service = () => {
  const serviceData = [
    {
      id: 1,
      title: "প্রোডাক্ট সাপোর্ট  ",
      description:
        "আপনার পণ্যের গুণগত মান এবং ক্রেতাদের সন্তুষ্টি নিশ্চিত করতে আমাদের প্রোডাক্ট সাপোর্ট সেবা নিন।.",
    },
    {
      id: 2,
      title: "সেলস সাপোর্ট ",
      description:
        "বিক্রয় বৃদ্ধির জন্য বিশেষজ্ঞ পরামর্শ এবং কার্যকরী কৌশল নিয়ে আমাদের সেলস সাপোর্ট সেবা।",
    },
    {
      id: 3,
      title: "মার্কেটিং সাপোর্ট  ",
      description:
        "আপনার ব্যবসার প্রসারে সমন্বিত মার্কেটিং সহায়তা মার্কেটিং কৌশল উন্নয়নে এবং কার্যকর প্রচারণায় আমাদের সাথে থাকুন। ",
    },
    {
      id: 4,
      title: "ডেলিভারি সাপোর্ট ",
      description:
        "দ্রুত ও নির্ভরযোগ্য ডেলিভারি সেবা পণ্য সঠিক সময়ে পৌঁছানোর নিশ্চয়তা দিতে আমাদের ডেলিভারি সাপোর্ট সেবা নিন।",
    },
  ];
  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
          {serviceData.map((data, i) => (
            <div key={data.id} className="serviceCard">
              <div className="serviceIconWraps">
                {i === 0 ? (
                  <ProductionQuantityLimits sx={{ fontSize: "75px" }} />
                ) : i === 1 ? (
                  <Inventory sx={{ fontSize: "75px" }} />
                ) : i === 2 ? (
                  <TrendingDown className='rotate-[275deg]' sx={{ fontSize: "75px" }} />
                ) : i === 3 ? (
                  <Storefront sx={{ fontSize: "75px" }} />
                ) : null}
              </div>
              <div className="serviceContent">
                <h4>{data.title}</h4>

                <p className="my-5">{data.description}</p>
                <Button component={Link} href='/services/1'>আরো দেখুন</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
