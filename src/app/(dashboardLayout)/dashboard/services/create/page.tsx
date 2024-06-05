import { Stack, Typography } from "@mui/material";
import CreateService from "@/components/Dashboard/pages/services/CreateService";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Muissa Consulting | Create Service",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
