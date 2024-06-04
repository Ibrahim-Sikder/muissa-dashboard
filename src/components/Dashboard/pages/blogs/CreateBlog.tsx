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
import MUIFileUploader from "@/components/Forms/FileUpload";

const validationSchema = z.object({
  title: z.string().nonempty(),
  author: z.string().nonempty(),
  content: z.string().nonempty(),
  publishDate: z.string().nonempty(),
  status: z.string().nonempty(),
  image: z.any(),
});

const CreateBlog = () => {
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
          title: "",
          author: "",
          content: "",
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
          <CardHeader subheader="Create a new blog post" title="Blog Details" />
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MUIInput
                  name="title"
                  label="Blog Title"
                  type="text"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="shortDescription"
                  label="Short Description"
                  type="text"
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>

              <Grid item xs={12}>
                <Box>
                  <RichtextEditor
                    name="description"
                    label="Description"
                    placeholder="Write your blog post here"
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

export default CreateBlog;
