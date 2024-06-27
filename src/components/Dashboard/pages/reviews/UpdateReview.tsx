"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import { useGetSingleReviewQuery } from "@/redux/api/reviewApi";
import Loader from "@/components/Loader";


const validationSchema = z.object({
  name: z.string({ required_error: "NAme is required" }),
  designation: z.string({ required_error: "Designation is required" }),

  message: z.string({ required_error: "Message is required" }),
  review_image: z.string({ required_error: "Message is required" }),
});

const UpdateReview = ({ id }: { id: string }) => {
  const [message, setMessage] = useState<string>("");

  const [imageUrl, setImageUrl] = useState<string>("");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const token = getCookie("mui-token");

  const { data: review, isLoading, refetch } = useGetSingleReviewQuery(id);

  const defaultValues = {
    name: review?.name,
    designation: review?.designation,
    message: review?.message,
    review_image: review?.review_image,
  };

  useEffect(() => {
    if (review) {
      setMessage(review?.message);
      setImageUrl(review?.review_image);
    }
  }, [review]);

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

    data.review_image = imageUrl;
    data.message = message;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/reviews/${id}`,
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
        router.push("/dashboard/reviews");
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
              <Grid item xs={12} sm={4}>
                <MUIInput name="name" label="Name" type="text" fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MUIInput
                  name="designation"
                  label="Designation"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <MUIInput
                  name="priority"
                  label="Priority"
                  type="number"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <MUIInput
                    name="message"
                    label="Message"
                    placeholder="Write your review here"
                    multiline
                    rows={6}
                    fullWidth
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
              {loading ? "Updating..." : "Update Review"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default UpdateReview;
