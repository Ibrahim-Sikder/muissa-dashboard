"use client";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
});

const defaultValues = {
  email: "",
};

const ForgotPassword = () => {
  const onSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="h-[500] flex items-center justify-center">
      <Box
        sx={{
          px: 5,
          py: 2,
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          padding: {
            xs: 2,
            md: 5,
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
            Forgot Your Password?
          </Typography>
          <small className=" text-center ">
            No problem. Just enter your email address below <br /> we’ll send
            you a link to reset it.
          </small>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <MUIInput
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>

          <Button type="submit" sx={{ width: "100%", marginTop: "10px" }}>
            Send Email
          </Button>
          <small className="mt-3 flex justify-center">
            Remembered your password?{" "}
            <Link href="/login">
              {" "}
              <b className="text-[#002140] ml-1">Sign In</b>
            </Link>
          </small>
        </MUIForm>
      </Box>
    </div>
  );
};

export default ForgotPassword;