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

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return products within 30 days of purchase. Please ensure the items are in original condition.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking number provided in the shipment confirmation email. Visit our order tracking page and enter your tracking number.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary depending on the destination.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support via email at support@example.com or by calling our hotline at 1-800-123-4567. Our support team is available 24/7.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or canceled within 24 hours of placing them. Please contact our customer support as soon as possible to make any changes.",
  },
];

export default function FAQSection(): React.JSX.Element {
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
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
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
