"use client";

import React, { useState } from "react";
import "../membership/membership.css";
import Container from "@/components/ui/HomePage/Container/Container";
import icon from "../../../assets/services/icon.png";
import icon2 from "../../../assets/services/icon2.png";
import icon3 from "../../../assets/services/icon3.png";
import icon4 from "../../../assets/services/icon4.png";
import icon5 from "../../../assets/services/icon5.png";
import icon6 from "../../../assets/services/icon6.png";
import Image from "next/image";
import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusinessOwnerForm from "./_components/BusinessOwnerForm";
import InvestorForm from "./_components/InvestorForm";

const Membership = () => {
  const serviceData = [
    {
      id: 1,
      title: "প্রোডাক্ট সাপোর্ট",
      description:
        "প্রোডাক্ট সাপোর্টের জন্য আমাদের টিম সবসময় প্রস্তুত। কোনো সমস্যা বা প্রশ্ন থাকলে, আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করব। আপনার সন্তুষ্টি আমাদের প্রধান লক্ষ্য, তাই যে কোনো সময় আমাদের সহযোগিতা পেতে পারেন।",
      img: icon,
    },
    {
      id: 1,
      title: "বিক্রয় সাপোর্ট",
      description:
        "বিক্রয় সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো বিক্রয় সম্পর্কিত সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon3,
    },
    {
      id: 1,
      title: "মার্কেটিং সাপোর্ট",
      description:
        "মার্কেটিং সাপোর্টের জন্য  Muissa Business Consulting Ltd.  সবসময় প্রস্তুত। আপনার যেকোনো মার্কেটিং সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon2,
    },
    {
      id: 1,
      title: "ডেলিভারি সাপোর্ট",
      description:
        "ডেলিভারি সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো ডেলিভারি সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon6,
    },
    {
      id: 1,
      title: "আইটি সাপোর্ট",
      description:
        "আইটি সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো আইটি সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon4,
    },
    {
      id: 1,
      title: "ফান্ডিং সাপোর্ট",
      description:
        "ফান্ডিং সাপোর্টের জন্য Muissa Business Consulting Ltd.   সবসময় প্রস্তুত। আপনার যেকোনো ফান্ডিং সমস্যা বা প্রশ্নের সমাধান পেতে আমাদের সাথে যোগাযোগ করুন। আমরা দ্রুত এবং কার্যকর সমাধান প্রদান করে আপনার ব্যবসার উন্নতিতে সহায়তা করব।",
      img: icon5,
    },
  ];

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const buttonStyle = {
    width: "200px",
    height: "50px",
    backgroundColor: "#1591A3",
    borderRadius: "3px",
    color: "#fff",
    margin: "0 auto",
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  return (
    <>
      <div className="serviceDetailsWrap aboutWraps">
        <div className="aboutContent memberShipContent">
          <h1>Membership</h1>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2 place-items-center  gap-10 sectionMargin">
          <p className="lg:w-[400px] leading-9">
            আমাদের ব্যবসা পরামর্শদান সেবার সদস্য হতে এবং বিশেষ সুবিধাগুলি উপভোগ
            করতে আজই সাবস্ক্রিপশন নিন। আমাদের সদস্যতা সাবস্ক্রিপশনের ফি মাত্র
            ৫০০ টাকা।
          </p>
          <div className="leading-8 relative">
            {/* <div className="divider"></div> */}
            <h1>সদস্যতা সাবস্ক্রিপশন </h1>
            {/* <h1> that the work we do, has</h1>
          <h1>positively reviews.</h1> */}
          </div>
        </div>
        <div className="membarshipWraps mt-14">
          <div className="grid grid-cols-2 gap-10">
            {serviceData.map((data) => (
              <div key={data.id} className="membarshipCard">
                <Image
                  className="w-[65px] mx-auto "
                  src={data.img}
                  alt="icon"
                />
                <div className="mt-3">
                  <h4>{data.title}</h4>
                  <p className="leading-7">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1  mt-14 w-[800px] mx-auto   ">
          <div className="mb-5 ">
            <h3 className="text-2xl font-semibold ">সদস্যতা নিবন্ধন</h3>
            <p className="mt-2 ">
              আমাদের সদস্য হতে নিচের ফর্মটি পূরণ করুন এবং সদস্যতা ফি প্রদান
              করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          <Box
            sx={{
              width: "100%",
              typography: "body1",
              //   justifyContent: "center",
              //   alignItems: "center",
            }}
          >
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{width: '430px', margin: '0 auto ', display:'flex', justifyContent: 'center'}}
                >
                  <Tab
                    sx={buttonStyle}
                    label=" As a Business Owner "
                    value="1"
                  />
                  <Tab sx={buttonStyle} label="As a Investor  " value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <BusinessOwnerForm />
              </TabPanel>
              <TabPanel value="2">
                <InvestorForm />
              </TabPanel>
            </TabContext>
          </Box>

          <div></div>
        </div>
      </Container>
    </>
  );
};

export default Membership;