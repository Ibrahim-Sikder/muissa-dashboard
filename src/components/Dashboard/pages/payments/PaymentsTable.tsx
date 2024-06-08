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
  Stack,
  TextField,
} from "@mui/material";
import { FaEye, FaTrash } from "react-icons/fa";

function noop(): void {
  // do nothing
}

export interface Payments {
  transactionId: string;
  date: string;
  month: string;
  amount: string;
  paymentMethod: string;
  name?: string;
  phone?: string;
  membershipId?: string;
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
}

export function PaymentsTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange = noop,
  onRowsPerPageChange = noop,
}: PaymentsTableProps): React.JSX.Element {
  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Payments History
          </Typography>
        }
        subheader="List of all payments made by customers."
        action={
          <Stack direction="row" spacing={1}>
            <Select defaultValue={"Requested"} size="small">
              <MenuItem value="Requested">Requested</MenuItem>
              <MenuItem value="On-progress">On-progress</MenuItem>
              <MenuItem value="Confirmed">Confirmed</MenuItem>
            </Select>

            <TextField
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
              <TableCell>Month</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Method</TableCell>
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
                  <TableCell>{row.membershipId}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.transactionId}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button color="primary" size="small" variant="contained">
                        View
                      </Button>

                      <Button color="success" size="small" variant="outlined">
                        Confirm
                      </Button>

                      <Button color="error" size="small" variant="outlined">
                        Cancel
                      </Button>
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
