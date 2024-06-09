/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";

// Define the validation schema using Zod
const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const router = useRouter();
  const isLargeDevice = useMediaQuery("(min-width:960px)");
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#002140",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#002140",
      },
      color: "#002140",
    },
    "& .MuiInputLabel-root": {
      color: "#002140", // Label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#002140",
    },
    "& .MuiInputBase-input": {
      color: "#002140",
    },
  };

  const handleSubmit = async (data: FieldValues) => {
    console.log(data)
  };

  return (
    <div
      className="h-[900px] my-8 w-full flex items-center justify-center bg-[#f8f8f8]"
      style={{
        background: isLargeDevice
          ? "linear-gradient(to left , #002140 50%, white 50%)"
          : "",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "60%",
            xl: "50%",
          },
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: isLargeDevice ? "600px" : "100%",
            height: isLargeDevice ? "600px" : "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#002140",
            color: "#fff",
            padding: "0px 50px",
            display: isLargeDevice ? "flex" : "none",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome To Muissa Business Consulting Ltd.
          </Typography>
          <Typography component="p" sx={{ marginTop: "10px", color: "#fff" }}>
            Elevate your business with our expert support in Product, Sales,
            Marketing, Delivery, IT, Funding, and Investment. Transform
            potential into performance with seamless, tailored solutions.
          </Typography>
        </Box>
        <Box className="bg-[#fff] shadow-md px-5 py-16 md:p-20 mx-3 md:m-auto lg:m-0 lg:mx-0 rounded-md md:rounded-none w-full md:w-[600px] flex items-center text-[#002140]">
          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              user: "",
              password: "",
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Login to Muissa!
              </Typography>
              <Box>
                <MUIInput
                  label="Phone number "
                  sx={textFieldStyles}
                  name="user"
                  fullWidth={true}
                />
                <MUIInput
                  label="Password"
                  name="password"
                  sx={textFieldStyles}
                  fullWidth={true}
                  type="password"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <Typography
                  sx={{
                    color: "#002140",
                    fontSize: isSmallDevice ? "12px" : "inherit",
                  }}
                  component="small"
                >
                  Forgot password
                </Typography>
              </Box>

              <Button
                type="submit"
                sx={{
                  borderRadius: "50px",
                  padding: "10px",
                  marginTop: "15px",
                  borderColor: "#fff",
                  background: "#002140",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "#002140",
                    backgroundColor: "#fff",
                    color: "#002140",
                  },
                }}
                fullWidth
                variant="outlined"
                color="primary"
              >
                Login
              </Button>
              <Typography
                sx={{
                  color: "#002140",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
                component="small"
              >
                Don't have an account? <Link href="/register">Register</Link>
              </Typography>
            </Box>
          </MUIForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
