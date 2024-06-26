"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Grid, TextField } from "@mui/material";
import Link from "next/link";
import { getCookie } from "@/helpers/Cookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import MUIDatePicker from "@/components/Forms/DatePicker";
import INTSelect from "@/components/Forms/Select";

const validationSchema = z.object({
  coupon_name: z.string({ required_error: "Coupon name is required." }),
  coupon_status: z.string({ required_error: "Coupon status is required." }),
  coupon_discount: z.preprocess((val) => {
    if (typeof val === "string" || typeof val === "number") {
      return parseFloat(val as string);
    }
    return val;
  }, z.number({ required_error: "Coupon discount is required." })),
  start_date: z.string(),
  end_date: z.string(),
});
const discountValidationSchema = z.object({
  discount_name: z.string({ required_error: "Discount name is required." }),
  discount_status: z.string({ required_error: "Discount status is required." }),
  discount_amount: z.preprocess((val) => {
    if (typeof val === "string" || typeof val === "number") {
      return parseFloat(val as string);
    }
    return val;
  }, z.number({ required_error: "Discount amount is required." })),
});

const CreateCoupon = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [successDiscountMessage, setSuccessDiscountMessage] =
    useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [errorDiscountMessage, setErrorDiscountMessage] = useState<string[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [discountLoading, setDiscountLoading] = useState(false);
  const router = useRouter();

  const token = getCookie("mui-token");

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
   

 

    data.coupon_discount = Number(data.coupon_discount);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/coupons/create-coupon`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);

        router.push("/dashboard/coupons");
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDiscountSubmit = async (data: FieldValues) => {
    console.log(data);
    setDiscountLoading(true);

    setSuccessDiscountMessage("");
    setErrorDiscountMessage([]);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/discounts/create-discount`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessDiscountMessage(response?.data?.message);

        router.push("/dashboard/coupons");
        setDiscountLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          setErrorDiscountMessage(data.message);
        } else {
          setErrorDiscountMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setDiscountLoading(false);
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <MUIForm
          onSubmit={handleSubmit}
          // resolver={zodResolver(validationSchema)}
          // defaultValues={{
          //   coupon_name: "",
          //   coupon_status: "",
          //   coupon_discount: 0,
          //   start_date: "",
          //   end_date: "",
          // }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            <CardHeader
              subheader="Create a new coupon"
              title="Coupon Details"
              action={
                <Link href="/dashboard/coupons">
                  <Button variant="outlined">Back to Coupons</Button>
                </Link>
              }
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <MUIInput
                    name="coupon_name"
                    label="Coupon Name"
                    type="text"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <MUIInput
                    name="coupon_discount"
                    label="Discount (%)"
                    type="text"
                    fullWidth
                    placeholder="e.g. 10%"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MUIInput
                    name="coupon_status"
                    label="Status"
                    type="text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MUIDatePicker
                    name="start_date"
                    label="Start Date"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MUIDatePicker name="end_date" label="End Date" fullWidth />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <div className="mt-2">
              {successMessage && <SuccessMessage message={successMessage} />}
              {errorMessage && <ErrorMessage message={errorMessage} />}
            </div>
            <CardActions sx={{ p: 2 }}>
              <Button  type="submit" variant="contained">
               Create
              </Button>
            </CardActions>
          </Card>
        </MUIForm>
      </Stack>
      <Stack spacing={3}>
        <MUIForm
          onSubmit={handleDiscountSubmit}
          resolver={zodResolver(discountValidationSchema)}
          defaultValues={{
            discount_name: "",
            discount_status: "",
            discount_amount: 0,
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
            }}
          >
            <CardHeader
              subheader="Create a new discount"
              title="Discount Details"
            />
            <Divider />
            <CardContent sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <MUIInput
                    name="discount_name"
                    label="Discount Name"
                    type="text"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                  <INTSelect
                    name="discount_status"
                    label="Status"
                    items={["Percentage", "Flat"]}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                  <MUIInput
                    name="discount_amount"
                    label="Discount Amount"
                    type="number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button
                    sx={{ marginTop: "15px" }}
                    disabled={discountLoading}
                    type="submit"
                    variant="contained"
                  >
                    {discountLoading ? "Creating..." : "Create"}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <div className="mt-2">
              {successDiscountMessage && (
                <SuccessMessage message={successDiscountMessage} />
              )}
              {errorDiscountMessage && (
                <ErrorMessage message={errorDiscountMessage} />
              )}
            </div>
          </Card>
        </MUIForm>
      </Stack>
    </>
  );
};

export default CreateCoupon;
