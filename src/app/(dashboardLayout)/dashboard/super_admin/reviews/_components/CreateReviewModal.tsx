"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import * as z from "zod";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import MUIFileUploader from "@/components/Forms/FileUpload";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import { keywords } from "@/types";
import { MUIMultipleValue } from "@/components/Forms/MultipleValue";
import MUIModal from "@/components/shared/MUIModal/MUIModal";




export type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  

const CreateReviewModal = ({ open, setOpen }: TProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const token = getCookie("mui-token");
  const { refetch } = useGetAllReviewsQuery({});

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

    data.review_image = imageUrl;

    if (Array.isArray(data.seo_keyword)) {
      data.seo_keyword = data.seo_keyword.map(
        (keywordObj: { title: string }) => keywordObj.title
      );
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/reviews/create-review`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setSuccessMessage(response?.data?.message);
        refetch();
        router.push("/dashboard/super_admin/reviews");
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

  return (
    <MUIModal open={open} setOpen={setOpen} title="Create Reviews ">
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
          
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12} sm={4}>
                <MUIInput name="name" label="Name" type="text" fullWidth size="medium" />
              </Grid>
              <Grid item lg={6}  xs={12} sm={4}>
                <MUIInput
                  name="designation"
                  label="Designation"
                  type="text"
                  fullWidth
                  size="medium"
                />
              </Grid>

              
              <Grid item lg={12} xs={12}>
                <Box>
                  <MUIInput
                    name="message"
                    label="Message"
                    placeholder="Write your review here"
                    multiline
                    rows={6}
                    fullWidth
                    size="medium"
                  />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <MUIFileUploader
                  name="review_image"
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: '50px' }}>
              <Typography component='h2' variant="h5" fontWeight='bold' >SEO SECTION </Typography>
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
                    options={keywords} />
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
          <Divider />
          <div className="mt-2">
            {successMessage && <SuccessMessage message={successMessage} />}
            {errorMessage && <ErrorMessage message={errorMessage} />}
          </div>
          <CardActions sx={{ p: 2 }}>
            <Button
              disabled={loading || !imageUrl}
              type="submit"
              variant="contained"
            >
              {loading ? "Creating..." : "Create"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
    </MUIModal>
  );
};

export default CreateReviewModal;
