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
import RichtextEditor from "@/components/Forms/RichtextEditor";
import MUIFileUploader from "@/components/Forms/FileUpload";
import Link from "next/link";
import { getCookie } from "@/helpers/Cookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import {
  useGetSingleBlogQuery
} from "@/redux/api/blogApi";
import { autoBatchEnhancer } from "@reduxjs/toolkit";
import Loader from "@/components/Loader";

const validationSchema = z.object({
  title: z.string({ required_error: "Title is required." }),
  author: z.string({ required_error: "Author is required." }),

  short_description: z.string({
    required_error: "Short description is required.",
  }),
  description: z.string({ required_error: "Description is required." }),
  blog_image: z.string({ required_error: "Image is required." }),
  // author: z.string().nonempty(),
  // content: z.string().nonempty(),
  // publishDate: z.string().nonempty(),
  // status: z.string().nonempty(),
  // image: z.any(),
});

const UpdateBlog = ({ id }: { id: string }) => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    data: blog,
    isLoading: blogLoading,
    refetch: refetchBlog,
  } = useGetSingleBlogQuery(id);


  const defaultValues = {
    title: blog?.title || "",
    short_description: blog?.short_description || "",
    description: blog?.description || "",
    author: blog?.author || "",
    blog_image: blog?.blog_image || "",
  };

  useEffect(() => {
    if (blog) {
      setImageUrl(blog.blog_image);
    }
  }, [blog]);

  const token = getCookie("mui-token");

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);

    setSuccessMessage("");
    setErrorMessage([]);

    data.blog_image = imageUrl;
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/blogs/${id}`,
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
        refetchBlog();
        router.push("/dashboard/blogs");
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

  if (blogLoading) {
    return <Loader />;
  }

  return (
    <Stack spacing={3}>
      <MUIForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
          }}
        >
          <CardHeader
            subheader="Update a blog post"
            title="Blog Details"
            action={
              <Link href="/dashboard/blogs">
                <Button variant="outlined">Back to Blogs</Button>
              </Link>
            }
          />
          <Divider />
          <CardContent sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <MUIInput
                  name="title"
                  label="Blog Title"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MUIInput
                  name="author"
                  label="Blog Author"
                  type="text"
                  fullWidth
                />
              </Grid>

              {/* <Grid item xs={12} md={6}>
                <MUIInput
                  name="priority"
                  label="Priority"
                  type="number"
                  fullWidth={true}
                />
              </Grid> */}

              <Grid item xs={12}>
                <MUIInput
                  name="short_description"
                  label="Short Description"
                  type="text"
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>

              <Grid item xs={12}>
                <RichtextEditor
                  name="description"
                  label="Description"
                  placeholder="Write your blog post here"
                />
              </Grid>
              <Grid item xs={12}>
                <MUIFileUploader
                  name="blog_image"
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
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default UpdateBlog;
