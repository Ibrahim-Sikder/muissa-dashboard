/* eslint-disable react/no-unescaped-entities */
"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { FieldValues } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { getCookie } from "@/helpers/Cookies";

// const defaultValues = {
//   membership_fee: null,
// };

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
};

const MemberFee = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const token = getCookie("mui-token");

  const submitHandler = async (values: FieldValues) => {
    setLoading(true);

    values.membership_fee = Number(values.membership_fee);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/fees/create-fee`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        // refetch();
        // setOpen(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 401, 409, 404, 500].includes(status)) {
          toast.error(data.message);
        } else {
          toast.error(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <MUIForm onSubmit={submitHandler}>
      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={12} sm={12} md={4}>
          <MUIInput name="membership_fee" label="Membership Fee" fullWidth />
        </Grid>
      </Grid>
      <Button
        disabled={loading}
        type="submit"
        variant="contained"
        color="primary"
      >
        {loading ? " Create..." : " Create Membership Fee"}
      </Button>
    </MUIForm>
  );
};

export default MemberFee;
