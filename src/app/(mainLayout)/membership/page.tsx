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
import {
  Box,
  Button,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusinessOwnerForm from "./_components/BusinessOwnerForm";
import InvestorForm from "./_components/InvestorForm";
import DocUploader from "@/components/Forms/DocUploader";
import MUITextArea from "@/components/Forms/TextArea";
import MUIInput from "@/components/Forms/Input";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import { supportServices } from "@/types";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  user: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
  password: z.string().min(6, "অন্তত ৬টি অক্ষর থাকতে হবে").optional(),

  name: z.string().min(1, "নাম আবশ্যক").optional(),
  phone: z.string().min(10, "অন্তত ১০টি সংখ্যা থাকা আবশ্যক").optional(),
  email: z.string().email("একটি বৈধ ইমেল ঠিকানা প্রদান করুন!").optional(),
  address: z.string().min(1, "ঠিকানা আবশ্যক").optional(),

  businessOwner: z.string().min(1, "ব্যবসার মালিকের নাম আবশ্যক").optional(),
  businessName: z.string().min(1, "ব্যবসার নাম আবশ্যক").optional(),
  businessType: z.string().min(1, "ব্যবসার ধরন আবশ্যক").optional(),
  businessAddress: z.string().min(1, "ব্যবসার ঠিকানা আবশ্যক").optional(),
  website: z.string().optional(),
  businessDetails: z.string().optional(),
  // businessNeed: z.array(z.string()).min(1, "পরিষেবার প্রয়োজনীয়তা নির্বাচন করুন").optional(),
  description: z.string().optional(),

  investor: z.string().min(1, "বিনিয়োগকারীর নাম আবশ্যক").optional(),
  investmentType: z.string().min(1, "বিনিয়োগের ধরন আবশ্যক").optional(),
  investAmount: z.string().min(1, "বিনিয়োগের পরিমাণ আবশ্যক").optional(),
  investTime: z.string().min(1, "বিনিয়োগের সময়কাল আবশ্যক").optional(),
  investGoal: z.string().min(1, "বিনিয়োগের লক্ষ্য আবশ্যক").optional(),
  investorDescription: z.string().optional(),
});

const defaultValues = {
  user: "",
  password: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  businessOwner: "",
  businessName: "",
  businessType: "",
  businessAddress: "",
  website: "",
  businessDetails: "",
  // businessNeed: [],
  description: "",
  investor: "",
  investmentType: "",
  investAmount: "",
  investTime: "",
  investGoal: "",
  investorDescription: "",
};

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
  const handleSubmit = (data: FieldValues) => {
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
    marginBottom: {
      xs: "10px",
    },
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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

        <div className="grid grid-cols-1  mt-14 w-full xl:w-[800px] lg:w-[500px] mx-auto   ">
          <div className="mb-5 ">
            <h3 className="text-2xl font-semibold ">সদস্যতা নিবন্ধন</h3>
            <p className="mt-2 ">
              আমাদের সদস্য হতে নিচের ফর্মটি পূরণ করুন এবং সদস্যতা ফি প্রদান
              করুন। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
          </div>

          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={1}>
              <Box
                sx={{
                  width: "100%",
                  typography: "body1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <TabContext value={value}>
                  <Box>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      orientation={isMobile ? "vertical" : "horizontal"}
                      sx={{
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "center",
                        width: {
                          lg: "430px",
                        },
                      }}
                    >
                      <Tab
                        sx={buttonStyle}
                        label=" As a Business Owner "
                        value="1"
                      />
                      <Tab sx={buttonStyle} label="As a Investor  " value="2" />
                    </TabList>
                  </Box>
                  <TabPanel value="1" sx={{ padding: "0px" }}>
                    <Stack
                      direction={isMobile ? "column" : "row"}
                      spacing={{ xs: 1, md: 3, lg: 3 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="businessOwner"
                            label="AS A BUSINESS OWNER "
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="businessName"
                            label="ব্যবসার নাম "
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="businessType"
                            label="ব্যবসার ধরন"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="businessAddress"
                            label="ব্যবসার ঠিকানা"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="website"
                            label="ওয়েবসাইট (যদি থাকে)"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="businessDetails"
                            label="ব্যবসার বিবরণ"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIMultiSelect
                            items={supportServices}
                            name="businessNeed"
                            label="পরিষেবার প্রয়োজনীয়তা"
                            fullWidth
                            size="medium"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={12} lg={12}>
                          <MUITextArea
                            name="description"
                            placeholder="আপনার কোন বিশেষ চাহিদা বা অনুরোধ আছে?"
                            minRows={3}
                            sx={{
                              border: "1px solid #ddd",
                              padding: "10px",
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Box>
                        <DocUploader sx={{ fontSize: "20px" }} name="file" />
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={12}
                          sx={{ marginTop: "10px" }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <Button
                              type="submit"
                              sx={{ display: "block", margin: "0 auto" }}
                            >
                              সাবমিট করুন
                            </Button>
                          </Box>
                        </Grid>
                      </Box>
                    </Stack>
                  </TabPanel>
                  <TabPanel value="2" sx={{ padding: "0px" }}>
                    <Stack
                      direction={isMobile ? "column" : "row"}
                      spacing={{ xs: 1, md: 3, lg: 3 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <Grid item xs={12} sm={6} md={6} lg={12}>
                            <MUIInput
                              name="investor"
                              label="AS A INVESTOR "
                              fullWidth
                              size="medium"
                            />
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="investmentType"
                            label="বিনিয়োগের ধরন"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="investAmount"
                            label="বিনিয়োগের পরিমাণ"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="investTime"
                            label="বিনিয়োগের সময়কাল"
                            fullWidth
                            size="medium"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUIInput
                            name="investGoal"
                            label="বিনিয়োগের লক্ষ্য"
                            fullWidth
                            size="medium"
                          />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={12}>
                          <MUITextArea
                            name="investorDescription"
                            placeholder="আপনার কোন বিশেষ চাহিদা বা অনুরোধ আছে?"
                            minRows={3}
                            sx={{
                              border: "1px solid #ddd",
                              padding: "10px",
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Box
                        sx={{
                          marginTop: "50px",
                        }}
                      >
                        <DocUploader sx={{ fontSize: "20px" }} name="file" />
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          md={6}
                          lg={12}
                          sx={{ marginTop: "10px" }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <Button
                              type="submit"
                              sx={{ display: "block", margin: "0 auto" }}
                            >
                              সাবমিট করুন
                            </Button>
                          </Box>
                        </Grid>
                      </Box>
                    </Stack>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </MUIForm>
        </div>
      </Container>
    </>
  );
};

export default Membership;
