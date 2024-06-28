/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import axios from "axios";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { setCookie } from "@/helpers/Cookies";

// Define the validation schema using Zod
const validationSchema = z.object({
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
  password: z
    .string({ required_error: "Password is required." })
    .min(6, "Must be at least 6 characters"),
});



const Login = () => {
  const router = useRouter();
  const isLargeDevice = useMediaQuery("(min-width:960px)");
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
    setSuccessMessage("");
    setErrorMessage([]);
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/login/admin`,
        data
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        setCookie("mui-token", response?.data?.data?.token, { expires: 10 });
        router.push(`/dashboard`);

      }
    } catch (error: any) {

      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="lg:h-screen mb-10 w-full flex items-center justify-center bg-[#f8f8f8]"

    >
      <Stack


      >

        <Box className="bg-[#fff] shadow-md px-5 py-16 md:p-20 mx-3 md:m-auto lg:m-0 lg:mx-0 rounded-md md:rounded-none w-full md:w-[650px] flex items-center text-[#002140]">
          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              auth: "",
              password: "",
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: {
                    xs: "30px",
                  },
                }}
              >
                Welcome To Admin !
              </Typography>
              <Box>
                <MUIInput
                  label="Email/Phone number "
                  sx={textFieldStyles}
                  name="auth"
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
                <Link href={"/forgot-password"}>
                  <Typography
                    sx={{
                      color: "#002140",
                      fontSize: isSmallDevice ? "12px" : "inherit",
                    }}
                    component="small"
                  >
                    Forgot password
                  </Typography>
                </Link>
              </Box>
              {successMessage && <SuccessMessage message={successMessage} />}
              {errorMessage && <ErrorMessage message={errorMessage} />}
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
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  " Login"
                )}
              </Button>

            </Box>
          </MUIForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
