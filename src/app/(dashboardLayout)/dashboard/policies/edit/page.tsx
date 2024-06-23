import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const EditPoliciesForm = dynamic(
  () => import("@/components/Dashboard/pages/policies/EditPoliciesForm"),
  {
    ssr: false,
  }
);

export default function EditPoliciesPage() {
  return (
    <Stack spacing={3}>
      <EditPoliciesForm />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Policies ",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
