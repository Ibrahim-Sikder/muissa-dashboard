"use client";

import React from "react";
import profile from "../../../assets/team/team3.jpg";
import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import { Box, Button, Grid, Typography } from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const page = () => {
  const submitHandler = (data: FieldValues) => {
    console.log(data);
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
            <MUIInput name="place" label="নাম " fullWidth size="medium" />
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
            <MUIInput name="emailConfirm" label="ঠিকানা" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="email" label="ইমেইল " fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={12} sx={{ marginRight: "0px" }}>
           <Typography variant="h6" component='div' sx={{marginTop: '10px'}}>ব্যবসায়িক তথ্য </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="email" label="ব্যবসার নাম " fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="emailConfirm" label="ব্যবসার ধরন" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="emailConfirm" label="ব্যবসার ধরন" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginRight: "0px" }}>
            <MUIInput name="emailConfirm" label="ব্যবসার ধরন" fullWidth size="medium" />
          </Grid>

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

export default page;
