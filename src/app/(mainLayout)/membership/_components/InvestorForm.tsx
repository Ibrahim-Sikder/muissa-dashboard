"use client";

import Image from "next/image";
import MUIForm from "@/components/Forms/Form";
import { Box, Button, Grid } from "@mui/material";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import INTSelect from "@/components/Forms/Select";

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address!"),
  phone: z.string().min(10, "Must be at least 10 digits"),
  investor: z.string().min(1, "Role is  is required"),
});
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const InvestorForm = () => {
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={defaultValues}
      >
        <Box>
          <Grid container direction="column" justifyContent="center">
            <Grid item lg={6} md={6} sm={6}>
              <INTSelect
                size="medium"
                name="investor"
                label="As BUSINESS OWNER"
                items={["AS A INVESTOR "]}
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6}>
              <MUIInput size="medium" label="নাম" name="name" fullWidth />
            </Grid>
            <Grid item lg={6}>
              <MUIInput
                size="medium"
                label="ইমেইল ঠিকানা"
                name="email"
                fullWidth
              />
            </Grid>
            <Grid item lg={6}>
              <MUIInput
                size="medium"
                label="ফোন নম্বর"
                name="phone"
                fullWidth
              />
            </Grid>

            <Grid item lg={6}>
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
                সাবমিট করুন
              </Button>
            </Grid>
          </Grid>
        </Box>
      </MUIForm>
    </div>
  );
};

export default InvestorForm;
