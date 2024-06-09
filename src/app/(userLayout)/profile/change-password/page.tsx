"use client";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  oldPassword: z
    .string()
    .min(6, "Old password must be at least 6 characters long"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long"),
  confirmPassword: z
    .string()
    .min(6, "Confirm password must be at least 6 characters long"),
  otp: z.string().min(4, "Please enter your 6 digit OTP"),
});

const defaultValues = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const onSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Stack>
      <Box
        sx={{
          px: 5,
          py: 2,
          maxWidth: "500px",
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          padding: {
            xs:2,
            md:5
          },
          margin: "0 auto",
        }}
      >
        <MUIForm
          onSubmit={onSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={defaultValues}
        >
          <Typography
            component="div"
            variant="h5"
            fontWeight="bold"
            textAlign="center"
          >
            Change Password{" "}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="oldPassword"
                label="Old Password"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="newPassword"
                label="New Password"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="confirmPassword"
                label="Confirm Password"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ width: "100%", marginTop: "10px" }}>
            Update Password
          </Button>
        </MUIForm>
      </Box>
    </Stack>
  );
};

export default ChangePassword;
