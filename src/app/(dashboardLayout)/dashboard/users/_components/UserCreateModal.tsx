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


const userSchema = z.object({
  name: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
  }),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password required'),
  dob: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), 'Invalid date of birth'),
  gender: z.enum(['male', 'female', 'others'], {
    message: "Gender must be 'male', 'female', or 'others'",
  }),
  role: z.enum(['admin', 'manager', 'editor'], {
    message: "Role must be 'admin', 'manager', or 'editor'",
  }),
  department: z.array(
    z.enum(['content', 'hotel', 'restaurant'], {
      message: "Department must be 'content', 'hotel', or 'restaurant'",
    })
  ).min(1, 'At least one department must be selected'),
});

const defaultValues = {
  name: "",
  phone: "",
  email: "",
  dob: "",
  gender: "male",
  role: "editor",
  department: [],
};

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserCreateModal = ({ open, setOpen }: TProps) => {



  const submitHandler = async (values: FieldValues) => {
    console.log("Submitted Values: ", values);


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
            <MUIInput name="email" type="email" label="Email" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput name="password" type="password" label="Password" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <MUIInput name="phone" type="text" label="Phone" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <INTSelect items={adminRole} name="role" label="Role" fullWidth />
          </Grid>




        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Create a User
        </Button>
      </MUIForm>
    </MUIModal>
  );
};

export default UserCreateModal;
