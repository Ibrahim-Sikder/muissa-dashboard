"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import MUIForm from "@/components/Forms/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import MUIInput from "@/components/Forms/Input";

export const validationSchema = z.object({
  currentPassword: z.string().min(6, "Must be at least 6 characters"),
  newPassword: z.string().min(6, "Must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Must be at least 6 characters"),
});

export function UpdatePasswordForm(): React.JSX.Element {
  const handleSubmit = async (data: FieldValues) => {};

  return (
    <MUIForm
      onSubmit={handleSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
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
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: "sm" }}>
            <MUIInput
              name="currentPassword"
              label="Current Password"
              type="password"
              fullWidth={true}
            />
            <MUIInput
              name="newPassword"
              label="New Password"
              type="password"
              fullWidth={true}
            />

            <MUIInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth={true}
            />
          </Stack>
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
