/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import { KeyOff } from "@mui/icons-material";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MUIForm from "@/components/Forms/Form";
import MUIModal from "@/components/shared/MUIModal/MUIModal";
import MUIInput from "@/components/Forms/Input";
import INTSelect from "@/components/Forms/Select";
import { adminRole, role } from "@/types";
import axios from "axios";

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  auth: z.string({ required_error: "This field is required." }).refine(
    (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{11,}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    },
    {
      message: "Please enter a valid email address or phone number!",
    }
  ),
  password: z.string().min(6, "Must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],

  // dob: z
  //   .string()
  //   .refine((val) => !isNaN(Date.parse(val)), 'Invalid date of birth'),
  // gender: z.enum(['male', 'female', 'others'], {
  //   message: "Gender must be 'male', 'female', or 'others'",
  // }),
  // role: z.enum(['admin', 'manager', 'editor'], {
  //   message: "Role must be 'admin', 'manager', or 'editor'",
  // }),
  // department: z.array(
  //   z.enum(['content', 'hotel', 'restaurant'], {
  //     message: "Department must be 'content', 'hotel', or 'restaurant'",
  //   })
  // ).min(1, 'At least one department must be selected'),
});

const defaultValues = {
  name: "",
  auth: "",
  password: "",
  confirmPassword: "",
};

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserCreateModal = ({ open, setOpen }: TProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const submitHandler = async (values: FieldValues) => {
    console.log("Submitted Values: ", values);

    values.role = "admin";

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/create-user`,
        values
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setOpen(false);
        setLoading(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 500].includes(status)) {
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
    <MUIModal open={open} setOpen={setOpen} title="Create a User">
      <MUIForm
        onSubmit={submitHandler}
        resolver={zodResolver(userSchema)}
        defaultValues={defaultValues}
      >
        <Grid container spacing={2} sx={{ my: 2 }}>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput name="name" label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput name="auth" type="email" label="Email/Phone" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput
              name="password"
              type="password"
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <MUIInput name="phone" type="text" label="Phone" fullWidth />
          </Grid> */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <INTSelect items={adminRole} name="role" label="Role" fullWidth />
          </Grid> */}
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Create a User
        </Button>
      </MUIForm>
    </MUIModal>
  );
};

export default UserCreateModal;
