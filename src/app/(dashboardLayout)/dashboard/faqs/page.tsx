import * as React from "react";
import { Container, Stack } from "@mui/material";

import type { Metadata } from "next";
import FAQSection from "@/components/Dashboard/pages/faq/FAQSection";
import FAQTable from "@/components/Dashboard/pages/faq/FAQTable";

export const metadata: Metadata = {
  title: "Muissa Consulting | FAQ",
  description: "Frequently Asked Questions - Muissa Consulting",
  keywords: "faq, Muissa Consulting, questions, answers",
};

export default function FAQPage(): React.JSX.Element {
  return (
    <Stack spacing={3}>
      <FAQSection />
      <FAQTable />
    </Stack>
  );
}
