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
import { Box, Button, Grid } from "@mui/material";
import RichtextEditor from "@/components/Forms/RichtextEditor";
import Link from "next/link";
import INTSelect from "@/components/Forms/Select";
import MUIFileUploader from "@/components/Forms/FileUpload";

const validationSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  status: z.string().nonempty(),
});

const CreateService = () => {
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
          description: "",
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
            subheader="Service Details"
            title="Create a new service"
            action={
              <Link href="/dashboard/services">
                <Button variant="outlined">Back to Services</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MUIInput
                  name="title"
                  label="Service Title"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <INTSelect
                  name="category"
                  label="Service Category"
                  items={[
                    "Product Support",
                    "Technical Support",
                    "Customer Support",
                    "Funding Support",
                  ]}
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="shortDescription"
                  label="Short Description"
                  type="text"
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <RichtextEditor name="description" label="Description" />
              </Grid>

              <Grid item xs={12} md={6}>
                <MUIFileUploader name="image" />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
            }}
          >
            <Button type="submit" variant="contained">
              Create
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default CreateService;
