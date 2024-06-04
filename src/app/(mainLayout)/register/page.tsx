/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import Link from "next/link";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const validationSchema = z.object({
  user: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters"),
  phone: z.number().min(11, "Must be at least 11 characters"),

});

const Register = () => {
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
      className="min-h-screen w-full flex items-center justify-center bg-[#f8f8f8] "
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
            height: isLargeDevice ? "700px" : "auto",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "#002140",
            justifyItems: "center",
            color: "#fff",
            padding: "0px 50px",
            display: isLargeDevice ? "flex" : "none",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Welcome To Muissa Business Consulting Ltd. 
          </Typography>
          <Typography component="p" sx={{ marginTop: "10px", color: "#fff" }}>
          Elevate your business with our expert support in Product, Sales, Marketing, Delivery, IT, Funding, and Investment. Transform potential into performance with seamless, tailored solutions.
          </Typography>
        </Box>
        <Box className="bg-[#fff] shadow-md px-5 py-16  md:p-20 mx-3 md:m-aut0 lg:m-0 lg:mx-0 rounded-md md:rounded-none  w-full md:w-[600px]  flex items-center text-[#002140] ">
          <MUIForm
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
            defaultValues={{
              user: '',
              password: '',
              phone: ''
            }}
          >
            <Box>
              <Typography
                fontWeight="semibold"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Register Now  !
              </Typography>
              <Box>
                <MUIInput
                  label="Name"
                  sx={textFieldStyles}
                  name="user"
                  fullWidth={true}
                />
                <MUIInput
                  label="Phone Number"
                  sx={textFieldStyles}
                  name="phone"
                  fullWidth={true}
                />
                <MUIInput
                  label="Password"
                  name="password"
                  sx={textFieldStyles}
                  fullWidth={true}
                />
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
               Register
              </Button>
              <Typography
                  sx={{
                    color: "#002140",
                    fontSize:  "12px",
                    justifyContent: "right",
                    display:'flex',
                    marginTop: '5px'
                  }}
                  component="small"
                >
                  Already have an account ? <Link href='/login'>Login</Link>
                </Typography>
            </Box>
          </MUIForm>
        </Box>
      </Stack>
    </div>
  );
};

export default Register;
