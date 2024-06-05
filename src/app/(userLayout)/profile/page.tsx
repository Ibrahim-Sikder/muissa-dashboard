<<<<<<< HEAD
import Container from '@/components/ui/HomePage/Container/Container';
import React from 'react';

const page = () => {
    return (
        <Container className='sectionMargin'>
            <h4>profile home page </h4>
        </Container>
    );
};

export default page;
=======
"use client";

import React, { useState } from "react";
import profile from "../../../assets/team/team3.jpg";
import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import { Box, Button, Grid, Tab, Typography } from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BusinessOwnerForm from "@/app/(mainLayout)/membership/_components/BusinessOwnerForm";
import TabPanel from "@mui/lab/TabPanel";
import InvestorForm from "@/app/(mainLayout)/membership/_components/InvestorForm";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import { supportServices } from "@/types";
import MUITextArea from "@/components/Forms/TextArea";

const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const Profile = () => {
  const submitHandler = (data: FieldValues) => {
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
    padding: "0px",
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  return (
    <div className="">
      <div className="flex gap-5 items-center">
        <Image className="w-40 rounded-full " src={profile} alt="profile" />
        <div>
          <h3>Mr Raihan Chowdhury </h3>
          <p>MUI-034567898</p>
        </div>
      </div>
      <MUIForm
        onSubmit={submitHandler}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          user: "",
          password: "",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="name" label="নাম " fullWidth size="medium" />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput
              name="phone"
              label="ফোন নাম্বার"
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="email" label="ইমেইল " fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput
              name="address"
              label="ঠিকানা"
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="email" label="ইমেইল " fullWidth size="medium" />
          </Grid>

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
                  sx={{
                    width: "430px",
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
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="businessName"
                      label="ব্যবসার নাম "
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="businessType"
                      label="ব্যবসার ধরন"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="businessAddress"
                      label="ব্যবসার ঠিকানা"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="website"
                      label="ওয়েবসাইট (যদি থাকে)"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="emailConfirm"
                      label="ব্যবসার বিবরণ"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIMultiSelect
                      sx={{ marginTop: "50px" }}
                      items={supportServices}
                      name="businessNeed"
                      label="পরিষেবার প্রয়োজনীয়তা"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </TabPanel>
              <TabPanel value="2" sx={{ padding: "0px" }}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="email"
                      label="বিনিয়োগের ধরন"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="investType"
                      label="বিনিয়োগের পরিমাণ"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="investTime"
                      label="বিনিয়োগের সময়কাল"
                      fullWidth
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                    <MUIInput
                      name="investGoal"
                      label="বিনিয়োগের লক্ষ্য"
                      fullWidth
                      size="medium"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={6}>
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
              </TabPanel>
            </TabContext>
          </Box>

          {/* <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </Grid> */}
        </Grid>
      </MUIForm>
    </div>
  );
};

export default Profile;
>>>>>>> 1330d3f4315282460427e3f6beb64a916ee875bf
