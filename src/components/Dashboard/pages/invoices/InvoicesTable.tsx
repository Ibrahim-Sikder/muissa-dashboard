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
import {
  Button,
  CardHeader,
  TextField,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import { FaEye, FaPrint } from "react-icons/fa";
import dayjs from "dayjs";
import Link from "next/link";

function noop(): void {
  // do nothing
}

interface UserDetails {
  _id: string;
  auth: string;

  name: string;

  profile_pic: string;
  phone: string;
  email: string;
  address: string;
  userId: string;
}
export interface Invoice {
  _id: string;
  transaction_id: string;
  createdAt: string;
  payment_status: string;
  amount: string;
  payment_method: string;
  name?: string;
  phone?: string;
  userDetails: UserDetails;
}

interface InvoicesTableProps {
  count?: number;
  page?: number;
  rows?: Invoice[];
  rowsPerPage?: number;
  onPageChange?: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;

  setFilterType: (value: string) => void;
}

export function InvoicesTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange = noop,
  onRowsPerPageChange = noop,
  setFilterType,
}: InvoicesTableProps): React.JSX.Element {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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
            Invoices History
          </Typography>
        }
        subheader="List of all invoices issued to clients."
        action={
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterType(e.target.value)
            }
            label="Search"
            size="small"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <Button
                  color="primary"
                  size="small"
                  variant="contained"
                  sx={{ borderRadius: "0px 4px 4px 0px" }}
                >
                  Search
                </Button>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px 0px 0px 4px",
                paddingRight: "0 !important",
              },
            }}
          />
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Invoice ID</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Client Email/Phone</TableCell>
              <TableCell>Date</TableCell>
              {/* <TableCell>Due Date</TableCell> */}
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow
                  hover
                  key={index}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  <TableCell>{row?.userDetails?.userId}</TableCell>
                  <TableCell>{row?.userDetails?.name}</TableCell>
                  <TableCell>{row?.userDetails?.auth}</TableCell>
                  <TableCell>
                    {dayjs(row?.createdAt).format("MMM D, YYYY")}{" "}
                  </TableCell>
                  {/* <TableCell>{row.dueDate}</TableCell> */}
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    {capitalizeFirstLetter(row?.payment_status)}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Link href={`/dashboard/super_admin/invoices/${row._id}`}>
                        <Button
                          color="primary"
                          size="small"
                          variant="outlined"
                          startIcon={<FaEye />}
                        >
                          View
                        </Button>
                      </Link>
                    </Stack>
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
