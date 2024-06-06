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

function noop(): void {
  // do nothing
}

export interface Invoice {
  invoiceId: string;
  date: string;
  dueDate: string;
  amount: string;
  status: string;
  clientName: string;
  clientEmail: string;
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
}

export function InvoicesTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  onPageChange = noop,
  onRowsPerPageChange = noop,
}: InvoicesTableProps): React.JSX.Element {
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
              <TableCell>Client Email</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Due Date</TableCell>
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
                  <TableCell>{row.invoiceId}</TableCell>
                  <TableCell>{row.clientName}</TableCell>
                  <TableCell>{row.clientEmail}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.dueDate}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button
                        color="primary"
                        size="small"
                        variant="contained"
                        startIcon={<FaEye />}
                      >
                        View
                      </Button>
                      <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                        startIcon={<FaPrint />}
                      >
                        Print
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
