"use client";

import React, { useState } from "react";
import Container from "@/components/ui/HomePage/Container/Container";

import { Box } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import BusinessOwnerForm from "@/app/(mainLayout)/membership/_components/BusinessOwnerForm";
import InvestorForm from "@/app/(mainLayout)/membership/_components/InvestorForm";

const Membership = () => {
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
      <Container>
        <div className="grid grid-cols-1  mt-14 w-[800px] mx-auto   ">
          <div className="mb-5 ">
            <h3 className="text-2xl font-semibold ">সদস্যতা নিবন্ধন</h3>
            <p className="mt-2 ">
              আমাদের সদস্য হতে নিচের ফর্মটি পূরণ করুন এবং সদস্যতা ফি প্রদান
              করুন। <br /> আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
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
                  sx={{
                    width: "430px",
                    margin: "0 auto ",
                    display: "flex",
                    justifyContent: "center",
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
              <TabPanel value="1">
                <BusinessOwnerForm />
              </TabPanel>
              <TabPanel value="2">
                <InvestorForm />
              </TabPanel>
            </TabContext>
          </Box>

    
        </div>
      </Container>
    </>
  );
};

export default Membership;
