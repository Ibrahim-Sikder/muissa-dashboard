import CreateService from "@/components/Dashboard/pages/services/CreateService";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";

export default function CreateServicePage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Create a new service</Typography>
      </div>
      <CreateService />
    </Stack>
  );
}

export const metadata = {
  title: `Settings | Dashboard | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
} satisfies Metadata;
