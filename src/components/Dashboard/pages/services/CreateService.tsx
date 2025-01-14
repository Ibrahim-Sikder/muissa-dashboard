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
import { Box, Button, Grid, TableCell, Typography } from "@mui/material";
import RichtextEditor from "@/components/Forms/RichtextEditor";
import Link from "next/link";
import INTSelect from "@/components/Forms/Select";
import MUIFileUploader from "@/components/Forms/FileUpload";
import { getCookie } from "@/helpers/Cookies";
import { ServiceCategory } from "./ServiceSubcategoryTable";
import { toast } from "sonner";
import axios from "axios";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useRouter } from "next/navigation";
import { useGetAllCategoryQuery } from "@/redux/api/serviceApi";

import { keywords } from "@/types";
import { MUIMultipleValue } from "@/components/Forms/MultipleValue";
import MUIEditor from "@/components/Forms/JodiEditor";


// const validationSchema = z.object({
//   title: z.string({ required_error: "Title is required." }),
//   category: z.string({ required_error: "Category is required." }),
//   sub_category: z.string({ required_error: "Sub category is required." }),
//   priority: z.string({ required_error: "Priority is required." }),
//   short_description: z.string({
//     required_error: "Short description is required.",
//   }),
//   description: z.string({ required_error: "Description is required." }),
//   service_image: z.string({ required_error: "Image is required." }),
//   seo_title: z.string({ required_error: "Seo title is required." }),
//   seo_keyword: z.array(
//     z.string({ required_error: "Seo keyword is required." })
//   ),
//   seo_description: z.string({
//     required_error: "Seo description is required.",
//   }),
// });

const CreateService = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const token = getCookie("mui-token");
  const { data: category, isLoading, refetch } = useGetAllCategoryQuery({});

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);

    setErrorMessage([]);

    data.priority = Number(data.priority);
    data.service_image = imageUrl;

    if (Array.isArray(data.seo_keyword)) {
      data.seo_keyword = data.seo_keyword.map(
        (keywordObj: { title: string }) => keywordObj.title
      );
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/services/create-service`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response?.status === 200) {
        toast.success(response?.data?.message);

        refetch();
        router.push("/dashboard/super_admin/services");
        setLoading(false);
      }
    } catch (error: any) {
  
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage(["An unexpected error occurred."]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const selectedCategoryData = category?.find(
    (cat: ServiceCategory) => cat?.category === selectedCategory
  );

  const subCategories = selectedCategoryData?.sub_category || [];

  return (
    <Stack spacing={3}>
      <MUIForm
        onSubmit={handleSubmit}
      
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
              <Link href="/dashboard/super_admin/services">
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
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <INTSelect
                  name="category"
                  label="Category"
                  items={
                    Array.isArray(category)
                      ? category.map(
                        (cat: { category: string }) => cat.category
                      )
                      : []
                  }
                  onChange={handleCategoryChange}
                  size="medium"
                />
              </Grid>

              {/* subcategory */}
              <Grid item xs={12} md={3}>
                {/* <INTSelect
                  name="subcategory"
                  label="Service Subcategory"
                  items={[
                    "Product Support",
                    "Technical Support",
                    "Customer Support",
                    "Funding Support",
                  ]}
                /> */}
                <INTSelect
                  name="sub_category"
                  label="Sub Category"
                  items={subCategories?.map(
                    (subCat: { sub_category: string }) => subCat?.sub_category
                  )}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <MUIInput
                  name="priority"
                  label="Priority"
                  type="number"
                  fullWidth={true}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="short_description"
                  label="Short Description"
                  type="text"
                  multiline={true}
                  fullWidth={true}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12}>
                {/* <RichtextEditor name="description" label="Description" /> */}
                <MUIEditor name="description" label="Description" />

              </Grid>

              <Grid item xs={12} md={6}>
                <MUIFileUploader
                  name="service_image"
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Grid>
            </Grid>

            <Box sx={{ marginTop: "50px" }}>
              <Typography component="h2" variant="h5" fontWeight="bold">
                SEO SECTION{" "}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MUIInput
                    name="seo_title"
                    label="Seo Title"
                    type="text"
                    fullWidth={true}
                    size="medium"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MUIMultipleValue
                    name="seo_keyword"
                    label="Seo Keyword"
                    options={keywords}
                  />
                </Grid>

                <Grid item xs={12}>
                  <MUIInput
                    name="seo_description"
                    label="Seo Description "
                    type="text"
                    multiline={true}
                    fullWidth={true}
                    size="medium"
                  />
                </Grid>
              </Grid>
            </Box>
          </CardContent>
          {errorMessage && <ErrorMessage message={errorMessage} />}

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
              {loading ? "Creating..." : "Create"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default CreateService;
