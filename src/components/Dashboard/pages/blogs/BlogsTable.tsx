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
import { Button, CardHeader } from "@mui/material";
import Link from "next/link";
import { FaEye, FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import dayjs from "dayjs";
import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";

function noop(): void {
  // do nothing
}

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
  count?: number;
  page?: number;
  rows?: Blog[];
  rowsPerPage?: number;
}

export function BlogsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: BlogsTableProps): React.JSX.Element {
  const [deleteBlog, { isLoading }] = useDeleteBlogMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(rows);

  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
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
              Add New Blogs
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
            {rows?.map((row, index) => {
              return (
                <TableRow hover key={index}>
                  <TableCell>
                    <Avatar src={row?.blog_image} variant="square" />
                  </TableCell>
                  <TableCell>{row?.title}</TableCell>
                  <TableCell>{row?.author}</TableCell>
                  <TableCell>
                    {dayjs(row?.createdAt).format("MMMM D, YYYY")}
                  </TableCell>
                  <TableCell>
                    {row?.status ? row?.status : "Published"}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
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
                        onDelete={() => handleDelete(row?._id)}
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
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
