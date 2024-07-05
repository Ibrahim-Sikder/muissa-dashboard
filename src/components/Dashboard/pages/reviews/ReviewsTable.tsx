"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Button, CardHeader, Tooltip } from "@mui/material";
import Link from "next/link";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import dayjs from "dayjs";
import { useDeleteReviewMutation } from "@/redux/api/reviewApi";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";

function noop(): void {
  // do nothing
}

export interface Review {
  _id: string;
  name: string;
  designation: string;
  review_image: string;
  message: string;
  publishDate: string;
  status: string;
  createdAt: string;
}

interface ReviewsTableProps {
  count?: number;
  page?: number;
  rows?: Review[];
  rowsPerPage?: number;
  onPageChange?: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export function ReviewsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange = noop,
  onRowsPerPageChange = noop,
}: ReviewsTableProps): React.JSX.Element {
  const token = getCookie("mui-token");

  const [deleteReview, { isLoading }] = useDeleteReviewMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteReview({ id, token }).unwrap();
    } catch (error: any) {
      if (error.data?.message) {
        toast.error([error.data.message]);
      } else if (error.message) {
        toast.error([error.message]);
      } else {
        toast.error(["An unexpected error occurred."]);
      }
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
            Reviews
          </Typography>
        }
        subheader="List of all reviews available in the system."
        action={
          <Link href="/dashboard/super_admin/reviews/create">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaPlus />}
            >
              Add New Review
            </Button>
          </Link>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Publish Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow hover key={index}>
                  <TableCell>
                    <Avatar src={row?.review_image} variant="square" />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                  <TableCell
                    sx={{
                      maxWidth: "300px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Tooltip title={row.message}>
                      <Typography>{row.message}</Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    {dayjs(row.createdAt).format("MMMM D, YYYY")}
                  </TableCell>
                  <TableCell>{row.status ? row.status : "Published"}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <Link href={`/dashboard/super_admin/reviews/edit/${row?._id}`}>
                        <Button
                          color="primary"
                          variant="outlined"
                          size="small"
                          sx={{ textTransform: "none" }}
                          startIcon={<FaPencil />}
                        >
                          Update
                        </Button>
                      </Link>

                      <DeleteButtonWithConfirmation
                        onDelete={() => handleDelete(row._id)}
                        isLoading={isLoading}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
