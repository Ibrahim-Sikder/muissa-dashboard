"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import MUIInput from "@/components/Forms/Input";

export const profileValidationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  streetAddress: z
    .string()
    .min(5, "Street address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  postalCode: z.string().min(4, "Postal code must be at least 4 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

export function UpdateProfileForm(): React.JSX.Element {
  const handleSubmit = async (data: FieldValues) => {};

  return (
    <MUIForm
      onSubmit={handleSubmit}
      resolver={zodResolver(profileValidationSchema)}
      defaultValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
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
        <CardHeader subheader="Update your profile" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="phone" label="Phone" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="email" label="Email" type="email" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="streetAddress"
                label="Street Address"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="city" label="City" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="state" label="State" type="text" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput
                name="postalCode"
                label="Postal Code"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MUIInput name="country" label="Country" type="text" fullWidth />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
          }}
        >
          <Button type="submit" variant="contained">
            Update
          </Button>
        </CardActions>
      </Card>
    </MUIForm>
  );
}
