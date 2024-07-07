"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import RichtextEditor from "@/components/Forms/RichtextEditor";
import Link from "next/link";

const validationSchema = z.object({
  question: z.string().nonempty("Question is required"),
  answer: z.string().nonempty("Answer is required"),
  category: z.string().nonempty("Category is required"),
  status: z.string().nonempty("Status is required"),
});

const EditPoliciesForm = () => {
  const handleSubmit = async (data: FieldValues) => {
    // console.log(data);
    // Send data to API or perform any other actions
  };

  return (
    <Stack spacing={3}>
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          question: "",
          answer: "",
          category: "",
          status: "",
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
          <CardHeader
            subheader="Edit Policies"
            title="Policies Details"
            action={
              <Link href="/dashboard/super_admin/policies">
                <Button variant="outlined">Back to Policies</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  Privacy Policy
                </Typography>
                <RichtextEditor
                  name="privacyPolicy"
                  label="Answer"
                  placeholder="Enter the privacy policy here"
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography variant="body1" gutterBottom>
                    Terms & Conditions
                  </Typography>
                  <RichtextEditor
                    name="termsAndConditions"
                    label="Answer"
                    placeholder="Enter the terms and conditions here"
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ p: 2 }}>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default EditPoliciesForm;
