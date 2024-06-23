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
import { useGetAllCategoryQuery, useGetAllServicesForHomeQuery } from "@/redux/api/serviceApi";


import ReactHtmlParser from "react-html-parser";

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
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [tabIndex, setTabIndex] = useState(0);
  const [subTabIndex, setSubTabIndex] = useState(0);

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetAllCategoryQuery({});
  console.log('from servic epage ', categories)

  const selectedCategoryData = categories?.[tabIndex] || {};
  const subCategories = selectedCategoryData?.sub_category || [];

  const getCategoryName = (categoryId: any) => {
    const category = categories?.find((cat: any) => cat._id === categoryId);
    return category ? category.category : "Unknown Category";
  };

  const getSubCategoryName = (subCategoryId: any) => {
    if (!subCategoryId) {
      return "Unknown sub category";
    }

    let subCategoryName = "Unknown sub category";

    categories.forEach((category: any) => {
      const subCategory = category.sub_category?.find(
        (sub: any) => sub._id === subCategoryId
      );
      if (subCategory) {
        subCategoryName = subCategory.sub_category;
      }
    });

    return subCategoryName;
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    setSubTabIndex(0); // Reset subTabIndex when tab changes
    setSelectedCategory(categories[newValue]?.category || "");
    setErrorMessage([]);

    const firstSubCategoryId = categories[newValue]?.sub_category?.[0]?._id;
    if (firstSubCategoryId !== undefined) {
      const subCategoryName = getSubCategoryName(
        firstSubCategoryId.toString()
      );
      setSelectedSubCategory(subCategoryName);
    } else {
      setSelectedSubCategory("");
    }
  };

  const handleSubTabChange = (
    event: any,
    newValue: React.SetStateAction<number>
  ) => {
    setSubTabIndex(newValue);
  };

  const query = {
    selectedCategory,
    selectedSubCategory,
  };

  const {
    data: services,
    error: servicesError,
    isLoading: servicesLoading,
    refetch: refetchServices,
  } = useGetAllServicesForHomeQuery(
    selectedCategory && selectedSubCategory ? query : {}
  );

  const handleGetSubCategory = (newValue: any) => {
    setErrorMessage([]);

    const subCategoryName = getSubCategoryName(newValue);
    refetchServices();
    setSelectedSubCategory(subCategoryName);
  };

  useEffect(() => {
    if (servicesError) {
      const { status, data } = servicesError;
      if ([400, 401, 404, 409, 500].includes(status)) {
        setErrorMessage(data.message);
        setSelectedSubCategory("");
      } else {
        setErrorMessage(["An unexpected error occurred."]);

        setSelectedSubCategory("");
      }
    }
  }, [servicesError]);

  if (categoriesLoading || servicesLoading) {
    return <div>Loading...</div>;
  }

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              orientation="vertical"
              variant="scrollable"
              sx={{
                ".MuiTabs-indicator": {
                  backgroundColor: "#00305C",
                },
                ".MuiTab-root": {
                  color: "white",

                  "&.Mui-selected": {
                    color: "#fff",
                    backgroundColor: "#1591A3",
                  },
                  "&:hover": {
                    backgroundColor: "#d0e8f2",
                    color: 'black'
                  },
                },
              }}
            >
              {categories?.map((category: any, index: number) => (
                <Tab
                  key={category._id}
                  label={category?.category}
                  sx={tabStyle}
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
          <div className="lg:col-span-8">
            <div className="serviceDetails">
              <div className="serviceDetailsImage">
                <div className="w-full h-96 aspect-video relative serviceDetailsImage">
                  <Image
                    src={services[0]?.service_image || service}
                    alt={services[0]?.category}
                    height={475}
                    width={400}
                    className="rounded-t-lg h-full w-full object-cover aspect-video absolute"
                  />
                </div>
              </div>
              <div className="mt-5">
                {errorMessage && <ErrorMessage message={errorMessage} />}
              </div>
              <Box
                sx={{
                  padding: "20px 0",
                  background: "#ffffff",
                  borderRadius: "0px 0px 5px 5px",
                }}
              >
                {selectedCategory && (
                  <>
                    <Typography variant="h4" sx={{ color: "#1591A3" }}>
                      {services[0]?.category}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#1591A3" }}>
                      {services[0]?.sub_category}
                    </Typography>
                    <Typography variant="body1">
                      {services[0]?.short_description}
                    </Typography>
                    {/* {renderContent(categories?.data?.description)} */}
                    {/* <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(services[0]?.description),
                      }}
                    /> */}
                    <p className="my-10">ব্যবসায়ীদের কেবল ব্যবসার জন্য পণ্য সংগ্রহ করাই শেষ কাজ নয়। পণ্য সংগ্রহের পর তাদের মূল উদ্দেশ্য থাকে তার ক্রেতা বা ভোক্তার নিকট পণ্য বিক্রয় করা এবং মুনাফা অর্জন করা। কিন্তু সকল ব্যবসায়ী তাদের বিক্রয় সেবায় দক্ষ না থাকায় তারা সঠিক ভাবে বিক্রয় সেবা ভোক্তাকে দিতে সক্ষম নয়। যার ফলে প্রতিষ্ঠানের আশানুরুপ প্রবৃদ্ধি হয় না। বিক্রয় সেবার জন্য তাকে বিভিন্ন সমস্যার সম্মুখিন হতে হয়। তার মধ্যে কিছু সমস্যা হলো:</p>

                    <div className="">
                      <ul className="space-y-3">
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            বিক্রয় সেবায় পারদর্শী না থাকায় প্রতিষ্ঠানের আশানুরূপ Sales Generate করতে সক্ষম হয় না।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            ভোক্তার নিকট পণ্য পৌছানোর জন্য ডেলিভারি কোম্পানির নিকট শরণাপন্ন হতে হয়। ডেলিভারি কোম্পানি গুলো সময় মতো পণ্য ক্রেতার নিকট পৌছাতে পারে না। যার ফলে অর্থ ও সময়ের অপচয় হয়।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">	ব্যবসায়ীদের বিজ্ঞাপণের জন্য বাজেট তৈরি করতে হয়।</span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            বিক্রয় বৃদ্ধির জন্য ব্যবসায়ীরা এজেন্সির নিকট শরণাপন্ন হন। যেটা অনেক ব্যয়বহুল প্রক্রিয়া।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            ব্যবসায়ীদের নিজস্ব অভিজ্ঞ ও দক্ষ Sales টিম না থাকায় তারা সঠিক উপায়ে কাস্টমার সার্ভিস দিতে ব্যর্থ হয়।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            প্রতিষ্ঠানের Analysis Report তৈরিতে সহযোগিতা করা।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            প্রতিষ্ঠানের Monitoring Report File তৈরি করা।
                          </span>
                        </li>
                        <li className="flex items">
                          {" "}
                          <Forward />{" "}
                          <span className="ml-2">
                            প্রতিষ্ঠানের কার্যপদ্ধতি নির্ধারণে পরামর্শ প্রদান।
                          </span>
                        </li>
                      </ul>


                    </div>



                  </>
                )}
              </Box>
            </div>
            {/* <SpecialSupport /> */}
            {/* <ServiceSlider /> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Page;
