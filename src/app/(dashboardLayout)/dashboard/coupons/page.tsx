import CouponsTable from "@/components/Dashboard/pages/coupons/CouponsTable";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Muissa Consulting | Coupons",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};

const CouponsPage = () => {
  return (
    <Stack spacing={3}>
      <CouponsTable />
    </Stack>
  );
};

export default CouponsPage;
