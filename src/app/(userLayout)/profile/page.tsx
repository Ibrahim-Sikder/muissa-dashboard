"use client";

import React, { useState } from "react";
import profile from "../../../assets/team/team3.jpg";
import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import {
  Box,
  Button,
  Grid,
  Stack,
  Tab,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MUIMultiSelect from "@/components/Forms/MultiSelect";
import { role, subCategories, supportServices } from "@/types";
import MUITextArea from "@/components/Forms/TextArea";
import MUIFileUploader from "@/components/Forms/FileUpload";
import DocUploader from "@/components/Forms/DocUploader";
import INTSelect from "@/components/Forms/Select";
import MUIAutoComplete from "@/components/Forms/AutoComplete";
import MUIFileUploadButton from "@/components/Forms/FileUploadButton";
import { theme } from "@/lib/Theme/Theme";

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
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const buttonStyle = {
    width: isMobile ? "200px" : "200px",
    height: "50px",
    backgroundColor: isMobile ? "#00305C" : "#1591A3",
    borderRadius: "3px",
    color: "#fff",
    margin: "0 auto",
    marginBottom: {
      xs: "10px",
    },
    padding: "0px",
    display: "flex",
    fontSize: {
      lg: "15px",
      xs: "11px",
    },
    justifyContent: "center",
    "&.Mui-selected": {
      backgroundColor: "#00305C",
      BorderBottom: "0px",
      color: "#fff",
    },
  };

  return (
    <MUIForm
      onSubmit={submitHandler}
      resolver={zodResolver(validationSchema)}
      defaultValues={{
        user: "",
        password: "",
      }}
    >
      <div className="flex flex-col md:flex-row justify-center text-center gap-5 items-center">
        <Image className="w-40 rounded-full " src={profile} alt="profile" />
        <div>
          <h4 className="text-xl md:text-3xl font-semibold ">
            Mr Raihan Chowdhury{" "}
          </h4>
          <p className="text-sm md:text-normal ">
            <b>USER ID:</b> MUI-034567898
          </p>
          <MUIFileUploadButton name="file" />
        </div>
      </div>
      <div>
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
            <MUIInput name="address" label="ঠিকানা" fullWidth size="medium" />
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
                        name="businessName"
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
                        name="emailConfirm"
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
                  <Box
                    sx={{
                      marginTop: "100px",
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
                      <Button>সাবমিট করুন</Button>
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
                        name="email"
                        label="বিনিয়োগের ধরন"
                        fullWidth
                        size="medium"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={12}>
                      <MUIInput
                        name="investType"
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
                      <Button> সাবমিট করুন</Button>
                    </Grid>
                  </Box>
                </Stack>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </div>
    </MUIForm>
  );
};

export default Profile;
