import { UpdatePasswordForm } from "@/components/Dashboard/pages/settings/UpdatePasswordForm";
import { UpdateProfileForm } from "@/components/Dashboard/pages/settings/UpdateProfileForm";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import React from "react";

export default function SettingsPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Settings</Typography>
      </div>
      <UpdateProfileForm />
      <UpdatePasswordForm />
    </Stack>
  );
}

export const metadata = {
  title: `Settings | Dashboard | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
} satisfies Metadata;
