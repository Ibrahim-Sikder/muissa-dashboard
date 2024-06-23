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

import { usePathname } from "next/navigation";
import { useDeleteFaqMutation, useGetAllFaqsQuery } from "@/redux/api/faqApi";
import Loader from "@/components/Loader";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";

export default function FAQTable(): React.JSX.Element {
  const pathName = usePathname();
  const { data, error, isLoading, refetch } = useGetAllFaqsQuery({});
  const [deleteFaq, { isLoading: isDeleting }] = useDeleteFaqMutation();

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading || error) {
    return <Loader />;
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteFaq(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

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
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map(
                (faq: { _id: string; question: string; answer: string }) => (
                  <TableRow key={faq._id}>
                    <TableCell>{faq?.question}</TableCell>
                    <TableCell>{faq?.answer}</TableCell>
                    <TableCell>
                      <DeleteButtonWithConfirmation
                        onDelete={() => handleDelete(faq._id)}
                        isLoading={isDeleting}
                      />
                    </TableCell>
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
