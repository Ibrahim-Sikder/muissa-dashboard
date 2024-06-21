"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { useGetAllFaqsQuery } from "@/redux/api/baseApi";
import { usePathname } from "next/navigation";

const faqData = [
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

export default function FAQTable(): React.JSX.Element {
  const pathName = usePathname();
  const { data, error, isLoading, refetch } = useGetAllFaqsQuery({});

 
  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading || error) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            FAQ Table
          </Typography>
        }
        subheader="List of frequently asked questions."
        action={
          <Link href="/dashboard/faqs/create" passHref>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<FaPlus />}
            >
              Add FAQ
            </Button>
          </Link>
        }
      />
      <CardContent>
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            border: "1px solid #e0e0e0",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell>Answer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(
                (faq: { _id: string; question: string; answer: string }) => (
                  <TableRow key={faq._id}>
                    <TableCell>{faq?.question}</TableCell>
                    <TableCell>{faq?.answer}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
