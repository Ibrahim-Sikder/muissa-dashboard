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
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";

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
export interface Payments {
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

interface PaymentsTableProps {
  count?: number;
  page?: number;
  rows?: Payments[];
  rowsPerPage?: number;
  onPageChange?: (event: unknown, newPage: number) => void;
  onRowsPerPageChange?: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;

  setFilterType: (value: string) => void;
  handlePaymentStatus: (id: string, status: string) => void;
}

export function PaymentsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange = noop,
  onRowsPerPageChange = noop,
  setFilterType,
  handlePaymentStatus,
}: PaymentsTableProps): React.JSX.Element {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setFilterType(e.target.value as string);
  };
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
          <Typography
            onClick={() => setFilterType("")}
            variant="h5"
            fontWeight={700}
          >
            Payments History
          </Typography>
        }
        subheader="List of all payments made by customers."
        action={
          <Stack direction="row" spacing={1}>
            <Select
              defaultValue={"processing"}
              onChange={handleChange}
              size="small"
            >
              <MenuItem value="" disabled>
                Select
              </MenuItem>
              <MenuItem value="processing">Processing</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="hold">On Hold</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
              <MenuItem value="refunded">Refunded</MenuItem>
            </Select>

            <TextField
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFilterType(e.target.value)
              }
              label="Search"
              size="small"
              variant="outlined"
              fullWidth
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
          </Stack>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Membership ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {rows?.length > 0 ? (
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
                    <TableCell>{row?.userDetails?.phone}</TableCell>
                    <TableCell>{row?.transaction_id}</TableCell>
                    <TableCell>
                      {dayjs(row?.createdAt).format("MMM D, YYYY")}{" "}
                    </TableCell>
                    <TableCell>{row?.amount}</TableCell>
                    <TableCell>{row?.payment_method}</TableCell>
                    <TableCell>
                      {capitalizeFirstLetter(row?.payment_status)}
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={1}>
                        <Link href={`/dashboard/super_admin/payments/${row?._id}`}>
                          <Button
                            color="primary"
                            size="small"
                            variant="contained"
                          >
                            View
                          </Button>
                        </Link>

                        <Select
                          onChange={(event) =>
                            handlePaymentStatus(
                              row?._id,
                              event.target.value as string
                            )
                          }
                          defaultValue={"processing"}
                          size="small"
                        >
                          <MenuItem value="" disabled>
                            Select
                          </MenuItem>
                          <MenuItem value="processing">Processing</MenuItem>
                          <MenuItem value="pending">Pending</MenuItem>
                          <MenuItem value="hold">On Hold</MenuItem>
                          <MenuItem value="completed">Completed</MenuItem>
                          <MenuItem value="cancelled">Cancelled</MenuItem>
                          <MenuItem value="refunded">Refunded</MenuItem>
                        </Select>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          ) : (
            <div className="text-center py-3">No match found</div>
          )}
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
