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
import { toast } from "sonner";
import { useCallback } from "react";
import axios from "axios";
import { getCookie } from "@/helpers/Cookies";

export default function FAQTable(): React.JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(false);

  const pathName = usePathname();
  const token = getCookie("mui-token");
  const { data, error, isLoading, refetch }: any = useGetAllFaqsQuery({});
  // const [deleteFaq, { isLoading: isDeleting }] = useDeleteFaqMutation();

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  const handleDelete = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq/${id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response?.status === 200) {
          toast.success(response?.data?.message);

          refetch();
        }
      } catch (error: any) {
        if (error?.data) {
          toast.error([error.data.message]);
        } else if (error.message) {
          toast.error([error.message]);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      } finally {
        setLoading(false);
      }
    },
    [refetch, token]
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    if (error?.data) {
      toast.error([error.data.message]);
    } else if (error.message) {
      toast.error([error.message]);
    } else if (error.data) {
      toast.error([error.data]);
    } else {
      toast.error(["An unexpected error occurred."]);
    }
  }

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
          <Link href="/dashboard/super_admin/faqs/create" passHref>
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
                        isLoading={loading}
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
