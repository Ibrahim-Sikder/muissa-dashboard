"use client";

import {
  Card,
  CardHeader,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  TablePagination,
  Button,
  Link,
} from "@mui/material";
import { FaPlus, FaEye } from "react-icons/fa";

import dayjs from "dayjs";
import { FaPencil } from "react-icons/fa6";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";

const couponData = [
  {
    name: "Coupon 1",
    code: "COUPON1",
    discount: "10%",
    status: "Active",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
  {
    name: "Coupon 2",
    code: "COUPON2",
    discount: "20%",
    status: "Active",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
  {
    name: "Coupon 3",
    code: "COUPON3",
    discount: "30%",
    status: "Active",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
  {
    name: "Coupon 4",
    code: "COUPON4",
    discount: "40%",
    status: "Active",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
  {
    name: "Coupon 5",
    code: "COUPON5",
    discount: "50%",
    status: "Active",
    startDate: "2021-09-01",
    endDate: "2021-09-30",
  },
];

const CouponsTable = () => {
  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log(`Deleting coupon with id: ${id}`);
  };

  const isLoading = false;
  const count = couponData.length;
  const page = 0;
  const rowsPerPage = 5;
  const noop = () => {};

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Coupons
          </Typography>
        }
        subheader="List of all coupons available in the system."
        action={
          <Link href="/dashboard/coupons/create">
            <Button
              color="primary"
              size="small"
              variant="contained"
              startIcon={<FaPlus />}
            >
              Add New Coupon
            </Button>
          </Link>
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {couponData.map((coupon, index) => (
              <TableRow hover key={index}>
                <TableCell>{coupon.name}</TableCell>
                <TableCell>{coupon.code}</TableCell>
                <TableCell>{coupon.discount}</TableCell>
                <TableCell>{coupon.status}</TableCell>
                <TableCell>
                  {dayjs(coupon.startDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  {dayjs(coupon.endDate).format("MMMM D, YYYY")}
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <DeleteButtonWithConfirmation
                      onDelete={() => handleDelete(index)}
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
};

export default CouponsTable;
