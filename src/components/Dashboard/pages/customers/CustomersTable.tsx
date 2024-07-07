"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Button, CardHeader, TextField } from "@mui/material";
import Link from "next/link";

export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: { city: string; state: string; country: string; street: string };
  phone: string;
  createdAt: Date;
  membershipId: string;
}

// interface CustomersTableProps {
//   count?: number;
//   page?: number;
//   rows?: BusinessInfo[];
//   limit: number;
//   setLimit: (page: number) => void;
//   setFilterType: (page: string) => void;
//   setPage: (page: number) => void;
// }

interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: BusinessInfo[];
  limit: number;
  setLimit: (page: number) => void;
  setFilterType: (page: string) => void;
  setPage: (page: number) => void;
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

interface BusinessInfo {
  _id: string;
  userId: string;
  member_type: string;
  upload_file: string;
  userDetails: UserDetails;
  createdAt: Date;
}



export function CustomersTable({
  count = 0,
  rows = [],
  page = 0,
  limit,
  setLimit,
  
  setFilterType,
  setPage,
}: CustomersTableProps): React.JSX.Element {
  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setLimit(newRowsPerPage);
    setPage(0); // Reset page to 0 when changing rows per page
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardHeader
        title="Customers"
        subheader="List of all customers"
        onClick={() => setFilterType("")}
        action={
          <TextField
            label="Search"
            size="small"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterType(e.target.value)
            }
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
        <Table sx={{ minWidth: "800px", textAlign: "left" }}>
          <TableHead>
            <TableRow>
              <TableCell>Membership ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Signed Up</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row._id}>
                  <TableCell>{row?.userId}</TableCell>
                  <TableCell>
                    <Stack
                      sx={{ alignItems: "center" }}
                      direction="row"
                      spacing={2}
                    >
                      <Avatar src={row?.upload_file} />
                      <Typography variant="subtitle2">
                        {row?.userDetails?.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {row?.userDetails?.email
                      ? row?.userDetails?.email
                      : row?.userDetails?.auth}
                  </TableCell>
                  <TableCell>
                    {row?.userDetails?.phone
                      ? row?.userDetails?.phone
                      : row?.userDetails?.auth}
                  </TableCell>
                  <TableCell>
                    {dayjs(row?.createdAt).format("MMM D, YYYY")}
                  </TableCell>
                  <TableCell>
                    <Link href={`/dashboard/super_admin/customer/${row?._id}`}>
                      <Button color="primary" size="small" variant="outlined">
                        View
                      </Button>
                    </Link>
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
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={limit}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10,15, 20, 25,30, 35, 40 ]}
      />
    </Card>
  );
}
