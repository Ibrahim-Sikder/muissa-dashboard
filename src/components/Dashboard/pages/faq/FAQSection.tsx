"use client";

import * as React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Box,
  CardHeader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetAllFaqsQuery } from "@/redux/api/faqApi";
import Loader from "@/components/Loader";

export default function FAQSection(): React.JSX.Element {
  const { data: faqs, error, isLoading } = useGetAllFaqsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Card
      sx={{
        mb: 4,
        boxShadow: "none",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            FAQ view
          </Typography>
        }
        subheader="List of frequently asked questions."
      />
      <CardContent>
        {faqs?.map((faq: any) => (
          <Accordion
            key={faq._id}
            sx={{
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
}
