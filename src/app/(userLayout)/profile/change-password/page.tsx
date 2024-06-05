"use client";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  otp: z.string().min(4, "Please enter your 6 digit OTP"),
});

const ChangePassword = () => {
  const onSubmit = async (values: FieldValues) => {
    // console.log(values);
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
          padding: 5,
          margin: "0 auto",
        }}
      >
        <MUIForm onSubmit={onSubmit} resolver={zodResolver(validationSchema)}>
          <Typography
            component="div"
            variant="h5"
            fontWeight="bold"
            textAlign="center"
          >
            Change Password{" "}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <MUIInput
                name="email"
                label="Old Password"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={12} lg={12}>
              <MUIInput
                name="investType"
                label="New Password"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12}>
              <MUIInput
                name="investType"
                label="Confirm Password"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button type="submit" sx={{ width: "100%" }}>
              Update Password
            </Button>
          </Box>
        </MUIForm>
      </Box>
    </Stack>
  );
};

export default ChangePassword;
