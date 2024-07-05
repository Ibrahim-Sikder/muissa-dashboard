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
import { FaPlus  } from "react-icons/fa";

import dayjs from "dayjs";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";
import { useGetCouponQuery } from "@/redux/api/couponApi";
import Loader from "@/components/Loader";
import { getCookie } from "@/helpers/Cookies";
import { useGetDiscountQuery } from "@/redux/api/discountApi";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

type TCoupon = {
  _id: string;
  coupon_name: string;
  coupon_code: string;
  coupon_discount: string;
  coupon_status: string;
  startDate: string;
  endDate: string;
};
type TDiscount = {
  _id: string;
  discount_name: string;
  discount_status: string;
  discount_amount: string;
  createdAt: string;
};

const CouponsTable = () => {
  const [loading, setLoading] = useState(false);
  const token = getCookie("mui-token");

  const {
    data: couponData,
    isLoading,
    refetch: couponRefetch,
  }: any = useGetCouponQuery({ token });
  const {
    data: discountData,
    isLoading: discountLoading,
    refetch,
  } = useGetDiscountQuery({ token });

  const handleCouponDelete = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/coupons/${id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response?.status === 200) {
          toast.success(response?.data?.message);
          couponRefetch();

          setLoading(false);
        }
      } catch (error: any) {
        if (error?.data) {
          toast.error([error.data.message]);
        } else if (error.message) {
          toast.error([error.message]);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      } finally {
        setLoading(false);
      }
    },
    [couponRefetch, token]
  );
  const handleDiscountDelete = useCallback(
    async (id: string) => {
      setLoading(true);

      try {
        const response = await axios.delete(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/discounts/${id}`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response?.status === 200) {
          toast.success(response?.data?.message);
          refetch();

           
        }
      } catch (error: any) {
        if (error?.data) {
          toast.error([error.data.message]);
        } else if (error.message) {
          toast.error([error.message]);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      } finally {
        setLoading(false);
      }
    },
    [refetch, token]
  );

  if (isLoading || discountLoading) {
    return <Loader />;
  }

  const count = couponData?.coupons?.length;
  const page = 0;
  const rowsPerPage = 10;
  const noop = () => {};

  return (
    <>
      <Card sx={{ boxShadow: "none" }}>
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={700}>
              Coupons
            </Typography>
          }
          subheader="List of all coupons available in the system."
          action={
            <Link href="/dashboard/super_admin/coupons/create">
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
              {couponData?.coupons?.map((coupon: TCoupon, index: number) => (
                <TableRow hover key={index}>
                  <TableCell>{coupon?.coupon_name}</TableCell>
                  <TableCell>{coupon?.coupon_code}</TableCell>
                  <TableCell>{coupon?.coupon_discount}</TableCell>
                  <TableCell>{coupon?.coupon_status}</TableCell>
                  <TableCell>
                    {dayjs(coupon?.startDate).format("MMMM D, YYYY")}
                  </TableCell>
                  <TableCell>
                    {dayjs(coupon?.endDate).format("MMMM D, YYYY")}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                      <DeleteButtonWithConfirmation
                        onDelete={() => handleCouponDelete(coupon?._id)}
                        isLoading={isLoading || loading}
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
      <Card sx={{ boxShadow: "none" }}>
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={700}>
              Discount
            </Typography>
          }
          subheader="List of all discount available in the system."
          action={
            <Link href="/dashboard/super_admin/coupons/create">
              <Button
                color="primary"
                size="small"
                variant="contained"
                startIcon={<FaPlus />}
              >
                Add New Discount
              </Button>
            </Link>
          }
        />
        <Box sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: "800px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>

                <TableCell>Discount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Start Date</TableCell>

                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {discountData?.discounts?.map(
                (discount: TDiscount, index: number) => (
                  <TableRow hover key={index}>
                    <TableCell>{discount?.discount_name}</TableCell>

                    <TableCell>{discount?.discount_amount}</TableCell>
                    <TableCell>{discount?.discount_status}</TableCell>
                    <TableCell>
                      {dayjs(discount?.createdAt).format("MMMM D, YYYY")}
                    </TableCell>

                    <TableCell>
                      <Box sx={{ display: "flex", gap: "1rem" }}>
                        <DeleteButtonWithConfirmation
                          onDelete={() => handleDiscountDelete(discount?._id)}
                          isLoading={isLoading || loading}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              )}
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
    </>
  );
};

export default CouponsTable;
