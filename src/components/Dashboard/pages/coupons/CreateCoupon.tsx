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

const validationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required." }),
  code: z.string().nonempty({ message: "Code is required." }),
  discount: z.string().nonempty({ message: "Discount is required." }),
  status: z.string().nonempty({ message: "Status is required." }),
  startDate: z.string().nonempty({ message: "Start date is required." }),
  endDate: z.string().nonempty({ message: "End date is required." }),
});

const CreateCoupon = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const token = getCookie("mui-token");

  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    setLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

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

  return (
    <Stack spacing={3}>
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          name: "",
          code: "",
          discount: "",
          status: "",
          startDate: "",
          endDate: "",
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
                  name="name"
                  label="Coupon Name"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <MUIInput
                  name="discount"
                  label="Discount (%)"
                  type="text"
                  fullWidth
                  placeholder="e.g. 10%"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MUIInput name="status" label="Status" type="text" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <MUIDatePicker name="startDate" label="Start Date" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <MUIDatePicker name="endDate" label="End Date" fullWidth />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <div className="mt-2">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <CardActions sx={{ p: 2 }}>
            <Button disabled={loading} type="submit" variant="contained">
              {loading ? "Creating..." : "Create"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default CreateCoupon;
