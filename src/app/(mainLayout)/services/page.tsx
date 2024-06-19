"use client";

import React, { useEffect, useState } from "react";
import "./services.css";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  CheckCircle,
  Drafts,
  LocalPhone,
  LocationOn,
} from "@mui/icons-material";
import Image from "next/image";
import service from "../../../assets/logo/service4.jpg";
import SpecialSupport from "./_component/Services/SpecialSupport";
import ServiceSlider from "./_component/Services/ServiceSlider";
import Container from "@/components/ui/HomePage/Container/Container";
import {
  useGetAllCategoryQuery,
  useGetAllServicesForHomeQuery,
  
} from "@/redux/api/baseApi";
import { ServiceCategory } from "@/components/Dashboard/pages/services/ServiceSubcategoryTable";
import { ErrorMessage } from "@/components/error-message";
import DOMPurify from "dompurify";

const serviceDetails = [
  {
    id: 1,
    category: "Marketing Support",
    subCategory: [
      {
        id: 1,
        title: "Subcategory 1",
        sub_description:
          "We provide unparalleled services, striving for excellence in every aspect. With a commitment to quality and customer satisfaction, we deliver the finest solutions tailored to your needs. Our dedicated team ensures top-notch support, aiming to exceed expectations and foster long-term relationships. Experience the difference with our superior services, setting the standard for excellence in every interaction.",
        description: `Description for Subcategory 1.`,
      },
      {
        id: 2,
        title: "Subcategory 2",
        sub_description: `Description for Subcategory 2.`,
      },
    ],
  },
  {
    id: 2,
    category: "Technical Support",
    subCategory: [
      {
        id: 1,
        title: "Subcategory A",
        sub_description: `Description for Subcategory A.`,
      },
      {
        id: 2,
        title: "Subcategory B",
        sub_description: `Description for Subcategory B.`,
      },
    ],
  },
];

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [expanded, setExpanded] = useState<string | false>(false);
  const [subTabIndex, setSubTabIndex] = useState(0);

  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetAllCategoryQuery({});

  const selectedCategoryData = categories?.find(
    (cat: ServiceCategory) => cat?.category === selectedCategory
  );

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

  const handleAccordionChange =
    (panel: string, categoryId: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      setSubTabIndex(0); // Reset subTabIndex when accordion changes
      if (isExpanded) {
        const categoryName = getCategoryName(categoryId);

        setSelectedCategory(categoryName);
        setErrorMessage([]);

        const firstSubCategoryId = categories.find(
          (cat: any) => cat.category === categoryName
        )?.sub_category[0]?._id;

        if (firstSubCategoryId !== undefined) {
          const subCategoryName = getSubCategoryName(
            firstSubCategoryId.toString()
          );

          setSelectedSubCategory(subCategoryName);
        } else {
          setSelectedSubCategory("");
        }
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

  return (
    <>
      <div className="serviceDetailsWrap">
        <div className="serviceContent">
          <h1>Our Services</h1>
        </div>
      </div>
      <Container className="sectionMargin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            {categories?.map((service: any, index: number) => (
              <Accordion
                key={service._id}
                expanded={expanded === `panel${index}`}
                onChange={handleAccordionChange(`panel${index}`, service._id)}
                sx={{
                  marginBottom: "10px",
                  "&.Mui-expanded": {
                    marginBottom: "10px",
                  },
                  boxShadow: "none !important",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  sx={{
                    background:
                      expanded === `panel${index}` ? "#00305C" : "#1591A3",
                    color: "#ffffff",
                    borderRadius: "5px 5px 0px 0px",
                    "&:hover": {
                      background: "#00305C",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                    }}
                  >
                    {service?.category}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    background: "#f4f4f4",
                    borderRadius: "5px",
                  }}
                >
                  <Tabs
                    value={subTabIndex}
                    onChange={handleSubTabChange}
                    orientation="vertical"
                    variant="scrollable"
                    sx={{
                      padding: "10px",
                    }}
                  >
                    {subCategories?.map((sub: any, subIndex: number) => (
                      <Tab
                        onClick={() => handleGetSubCategory(sub?._id)}
                        label={sub?.sub_category}
                        key={sub?._id}
                        sx={{
                          color:
                            subTabIndex === subIndex ? "#00305C" : "#1591A3",
                          background:
                            subTabIndex === subIndex ? "#d0e8f2" : "#ffffff",
                          marginBottom: "10px",
                          borderRadius: "5px",
                          "&:hover": {
                            background: "#d0e8f2",
                            color: "#00305C",
                          },
                          "&.Mui-selected": {
                            background: "#d0e8f2",
                            color: "#00305C",
                          },
                        }}
                      />
                    ))}
                  </Tabs>
                </AccordionDetails>
              </Accordion>
            ))}
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
                    src={services[0]?.service_image || service}
                    alt={
                      services[0]
                        ?.category
                    }
                    width={700}
                    height={475}
                    className="rounded-t-lg h-full w-full object-cover absolute"
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
                {/* {expanded && (
                  <>
                    <Typography variant="h4" sx={{ color: "#1591A3" }}>
                      {services[Number(expanded.slice(5))]?.category}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#1591A3" }}>
                      {services[Number(expanded.slice(5))]?.sub_category}
                    </Typography>
                    <Typography variant="body1">
                      {services[Number(expanded.slice(5))]?.short_description}
                    </Typography>
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          services[Number(expanded.slice(5))]?.description
                        ),
                      }}
                    >
                      {
                        services[Number(expanded.slice(5))]?.description
                      }
                    </Typography>
                  </>
                )} */}
                {expanded && (
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
                    <Typography
                      variant="body1"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          services[0]?.description
                        ),
                      }}
                    >
                      {/* {
                        services[Number(expanded.slice(5))]?.description
                      } */}
                    </Typography>
                  </>
                )}
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
