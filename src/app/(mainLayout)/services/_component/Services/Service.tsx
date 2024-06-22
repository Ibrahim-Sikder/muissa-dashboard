'use client'

import { Button } from "@mui/material";
import React from "react";
import {
  BusinessCenter,
  Inventory,
  ProductionQuantityLimits,
  Storefront,
  TrendingDown,
} from "@mui/icons-material";
import "./services.css";
import Link from "next/link";
import Container from "@/components/ui/HomePage/Container/Container";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

const Service = () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(4);


  const { data: servicesData, error, isLoading, refetch } = useGetAllServicesQuery({
    page: currentPage,
    limit,
  });
  if (isLoading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>someting went wrong</p>
  }

  const serviceData = [
    {
      id: 1,
      title: "ফান্ডিং সাপোর্ট  ",
      description:
        "অর্থায়নের জন্য নির্ভরযোগ্য পরামর্শ সেবা, আপনার ব্যবসার অর্থায়নের প্রয়োজন মেটাতে আমাদের বিশেষজ্ঞ ফান্ডিং সাপোর্ট।",
    },
    {
      id: 2,
      title: "ইনভেস্টমেন্ট সাপোর্ট  ",
      description:
        "নিরাপদ বিনিয়োগের জন্য সঠিক পরামর্শ বিনিয়োগ পরিকল্পনা এবং ব্যবস্থাপনায় আমাদের অভিজ্ঞ পরামর্শদাতাদের সহায়তা নিন",
    },
    {
      id: 3,
      title: "মার্কেটিং সাপোর্ট  ",
      description:
        "আপনার ব্যবসার প্রসারে সমন্বিত মার্কেটিং সহায়তা মার্কেটিং কৌশল উন্নয়নে এবং কার্যকর প্রচারণায় আমাদের সাথে থাকুন। ",
    },
    {
      id: 4,
      title: "আইটি সাপোর্ট  ",
      description:
        "আপনার প্রযুক্তিগত সমস্যার কার্যকর সমাধান ব্যবসায়িক প্রয়োজন অনুযায়ী উন্নত প্রযুক্তি এবং আইটি সাপোর্ট সেবা প্রদান।",
    },
  ];
  const iconStyle = {
    fontSize: {
      lg: "75px",
      md: "60px",
      sm: "40px",
      xs: "30px",
    },
  };
  const buttonStyle = {
    fontSize: {
      xs: "10px",
      md: "12px",
    },
    width: {
      xs: "100px",
    },
    height: "30px",
    padding: "0px",
  };
  return (
    <Container>
      <div className="serviceCardWraps">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 ">
          {servicesData?.services?.map((data: any, i: number) => (
            <div key={data.id} className="serviceCard">
              <div className="serviceIconWraps">
                {i === 0 ? (
                  <ProductionQuantityLimits sx={iconStyle} />
                ) : i === 1 ? (
                  <Inventory sx={iconStyle} />
                ) : i === 2 ? (
                  <TrendingDown className="rotate-[275deg]" sx={iconStyle} />
                ) : i === 3 ? (
                  <Storefront sx={iconStyle} />
                ) : null}
              </div>
              <div className="serviceContent">
                <h4>{data.category}</h4>

                <p className="my-2 md:my-5">{data.short_description.slice(0, 100)} অর্থায়নের জন্য নির্ভরযোগ্য পরামর্শ সেবা, আপনার ব্যবসার অর্থায়নের প্রয়োজন মেটাতে আমাদের বিশেষজ্ঞ ফ

                </p>
                <Button sx={buttonStyle} component={Link} href={`/services/${data._id}`}>
                  আরো দেখুন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
