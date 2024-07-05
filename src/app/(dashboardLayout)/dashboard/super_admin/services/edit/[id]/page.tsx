import { Stack } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const UpdateService = dynamic(
  () => import("@/components/Dashboard/pages/services/UpdateService"),
  {
    ssr: false,
  }
);

export default function UpdateServicePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <Stack spacing={3}>
      <UpdateService id={params.id} />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Services",
  description: "Muissa Consulting services page ",
  keywords: "services, Muissa Consulting",
};
