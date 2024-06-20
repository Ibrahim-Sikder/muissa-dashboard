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
import { FaPlus } from "react-icons/fa";

function noop(): void {
  // do nothing
}

export interface Review {
  name: string;
  designation: string;
  review_image: string;
  message: string;
  publishDate: string;
  status: string;
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

  console.log(rows)
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
          <Link href="/dashboard/reviews/create">
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
                  <TableCell>{row.message}</TableCell>
                  <TableCell>{row.publishDate}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
