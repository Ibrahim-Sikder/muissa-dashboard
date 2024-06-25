"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  useGetAllCategoryQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";
import Loader from "@/components/Loader";

const validationSchema = z.object({
  title: z.string({ required_error: "Title is required." }),
  category: z.string({ required_error: "Category is required." }),
  sub_category: z.string({ required_error: "Sub category is required." }),
  short_description: z.string({
    required_error: "Short description is required.",
  }),
  description: z.string({ required_error: "Description is required." }),
  service_image: z.string({ required_error: "Image is required." }),
});

const UpdateService = ({ id }: { id: string }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    data: service,
    isLoading,
    refetch: refetchService,
  } = useGetSingleServiceQuery({ id });

  const [updateService] = useUpdateServiceMutation();

  const defaultValues = {
    title: service?.title || "",
    category: service?.category || "",
    sub_category: service?.sub_category || "",
    short_description: service?.short_description || "",
    description: service?.description || "",
    service_image: service?.service_image || "",
    priority: service?.priority || 0,
  };

  const handleSubmit = (data: FieldValues) => {
    // Your submit logic here
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack spacing={3}>
      <MUIForm
        onSubmit={handleSubmit}
        resolver={zodResolver(validationSchema)}
        defaultValues={defaultValues}
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
            title="Update Service"
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
              <Grid item xs={12} md={3}>
                <MUIInput
                  name="title"
                  label="Service Title"
                  type="text"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <INTSelect
                  name="category"
                  label="Category"
                  items={Array.isArray(service?.category) ? service.category : []}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <INTSelect
                  name="sub_category"
                  label="Sub Category"
                  items={Array.isArray(service?.sub_category) ? service.sub_category : []}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <MUIInput
                  name="priority"
                  label="Priority"
                  type="number"
                  fullWidth={true}
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="short_description"
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
                <MUIFileUploader
                  name="service_image"
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          {/* <div className="mt-2">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div> */}
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              p: 2,
            }}
          >
            <Button
              disabled={loading || isLoading || !imageUrl}
              type="submit"
              variant="contained"
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default UpdateService;
