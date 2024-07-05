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
import axios from "axios";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";

export const validationSchema = z.object({
  oldPassword: z
    .string()
    .min(6, "Old password must be at least 6 characters long"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters long"),
});

export function UpdatePasswordForm(): React.JSX.Element {
  const [successMessage, setSuccessMessage] = React.useState<string>("");

  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [isLoading, setIsLoading] = React.useState(false);

  const token = getCookie("mui-token");

  const handleSubmit = async (values: FieldValues) => {
    setIsLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/update-password`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
       
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);

        setIsLoading(false);
      }
      
    } catch (error: any) {
      
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 401, 409, 404, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MUIForm
      onSubmit={handleSubmit}
      resolver={zodResolver(validationSchema)}
      defaultValues={{
        oldPassword: "",
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
              name="oldPassword"
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
        {successMessage && <SuccessMessage message={successMessage} />}
        {errorMessage && <ErrorMessage message={errorMessage} />}

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            p: 2,
          }}
        >
          <Button type="submit" variant="contained">
            {isLoading ? "Processing..." : "Update Password"}
          </Button>
        </CardActions>
      </Card>
    </MUIForm>
  );
}
