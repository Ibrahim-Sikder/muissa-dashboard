"use client"
import { UpdatePasswordForm } from "@/components/Dashboard/pages/settings/UpdatePasswordForm";
import { UpdateProfileForm } from "@/components/Dashboard/pages/settings/UpdateProfileForm";
import Loader from "@/components/Loader";
import { getCookie } from "@/helpers/Cookies";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import React from "react";

export default function SettingsPage() {


  const token = getCookie("mui-token");

  const { data, error, isLoading } = useGetSingleUserQuery({ token });

  

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="text-center">Data not found </h1>;
  }
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Settings</Typography>
      </div>
      <UpdateProfileForm data={data}/>
      <UpdatePasswordForm />
    </Stack>
  );
}

// export const metadata = {
//   title: `Settings | Dashboard | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
// } satisfies Metadata;
