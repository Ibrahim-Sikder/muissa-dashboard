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
import RichtextEditor from "@/components/Forms/RichtextEditor";
import Link from "next/link";

const validationSchema = z.object({
  question: z.string().nonempty("Question is required"),
  answer: z.string().nonempty("Answer is required"),
  category: z.string().nonempty("Category is required"),
  status: z.string().nonempty("Status is required"),
});

const CreateFAQForm = () => {
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
            subheader="Create a new FAQ"
            title="FAQ Details"
            action={
              <Link href="/dashboard/faqs">
                <Button variant="outlined">Back to FAQs</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MUIInput
                  name="question"
                  label="Question"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Box>
                  <MUIInput
                    name="answer"
                    label="Answer"
                    type="text"
                    fullWidth
                    multiline
                  />
                </Box>
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

export default CreateFAQForm;
