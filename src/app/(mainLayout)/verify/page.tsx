"use client";

import MUIForm from "@/components/Forms/Form";
import INTForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import INTInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LockPerson, VerifiedUser } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

export const validationSchema = z.object({
  otp: z.string().min(4, "Please enter your 6 digit OTP"),
});

const VerifyPage = () => {
  const onSubmit = async (values: FieldValues) => {
    // console.log(values);
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        height: { sm: "100vh" },
      }}
    >
      <Box
        sx={{
          px: 4,
          py: 2,
          maxWidth: 400,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          padding: 5,
          margin: "0 auto",
        }}
      >
        <Stack alignItems="center" justifyContent="center">
          <Box
            sx={{
              "& svg": {
                width: 80,
                height: 80,
              },
            }}
          >
            <LockPerson sx={{ color: "primary.main" }} />
          </Box>
        </Stack>

        <MUIForm
          onSubmit={onSubmit}
          resolver={zodResolver(validationSchema)}
          defaultValues={{
            otp: "",
          }}
        >
          <Box sx={{ width: "100%", mb: 2 }}>
            <MUIInput type="text" name="otp" label="Enter Your OTP" fullWidth />
          </Box>

          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button type="submit" sx={{ width: "100%" }}>
              Verify OTP
            </Button>
          </Box>
        </MUIForm>
      </Box>
    </Stack>
  );
};

export default VerifyPage;
