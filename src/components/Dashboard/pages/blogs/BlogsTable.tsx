"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {
  Button,
  CardHeader,
  Stack,
  Pagination,

} from "@mui/material";
import Link from "next/link";
import { FaEye, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import dayjs from "dayjs";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";
import { toast } from "sonner";
import { getCookie } from "@/helpers/Cookies";

export interface Blog {
  _id: string;
  title: string;
  author: string;
  publishDate: string;
  status: string;
  blog_image: string;
  createdAt: Date;
  description: string;
  short_description: string;
}

interface BlogsTableProps {
  count: number;
  page: number;
  rows: Blog[];
  rowsPerPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function BlogsTable({
  count,
  rows,
  page,
  rowsPerPage,
  onPageChange,
}: BlogsTableProps): React.JSX.Element {
  const token = getCookie("mui-token");
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog({ id, token }).unwrap();
      toast.success("Blog deleted successful!");
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

  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Blogs
          </Typography>
        }
        subheader="List of all blogs available in the system."
        action={
          <Link href="/dashboard/blogs/create">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaPlus />}
            >
              Add New Blog
            </Button>
          </Link>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Publish Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell>
                  <Avatar src={row?.blog_image} variant="square" />
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                <TableCell>{row?.author}</TableCell>
                <TableCell>
                  {dayjs(row?.createdAt).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>{row?.status ? row?.status : "Published"}</TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Link href={`/dashboard/blogs/${row?._id}`}>
                      <Button
                        color="secondary"
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none" }}
                        startIcon={<FaEye />}
                      >
                        View
                      </Button>
                    </Link>
                    <Link href={`/dashboard/blogs/edit/${row?._id}`}>
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
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ padding: 2, alignItems: "center" }}>
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={onPageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Card>
  );
}
