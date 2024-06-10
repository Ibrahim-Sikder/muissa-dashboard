import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CreateService = dynamic(
  () => import("@/components/Dashboard/pages/services/CreateService"),
  {
    ssr: false,
  }
);

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
  title: "Muissa Consulting | Services",
  description: "Muissa Consulting services page ",
  keywords: "services, Muissa Consulting",
};
