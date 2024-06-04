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
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import MUIFileUploader from "@/components/Forms/FileUpload";
import Link from "next/link";

const validationSchema = z.object({
  name: z.string().nonempty("Name is required"),
  designation: z.string().nonempty("Designation is required"),
  image: z.any(),
  message: z.string().nonempty("Message is required"),
  publishDate: z.string().nonempty("Publish date is required"),
  status: z.string().nonempty("Status is required"),
});

const CreateReview = () => {
  const handleSubmit = async (data: FieldValues) => {
    console.log(data);
    // Send data to API or perform any other actions
  };

  return (
    <Stack spacing={3}>
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={{
          name: "",
          designation: "",
          message: "",
          publishDate: "",
          status: "",
          image: null,
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
            subheader="Create a new review"
            title="Review Details"
            action={
              <Link href="/dashboard/reviews">
                <Button variant="outlined">Back to Reviews</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <MUIInput name="name" label="Name" type="text" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MUIInput
                  name="designation"
                  label="Designation"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <TextField
                    name="message"
                    label="Message"
                    placeholder="Write your review here"
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <MUIFileUploader name="image" />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ p: 2 }}>
            <Button type="submit" variant="contained">
              Create
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default CreateReview;
