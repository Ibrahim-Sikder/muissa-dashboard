"use client";

import MUIForm from "@/components/Forms/Form";
import MUIInput from "@/components/Forms/Input";
import React, { useEffect, useRef, useState } from "react";
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
  Typography,
} from "@mui/material";
import MUIFileUploader from "@/components/Forms/FileUpload";
import Link from "next/link";
import { getCookie } from "@/helpers/Cookies";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { SuccessMessage } from "@/components/success-message";
import { ErrorMessage } from "@/components/error-message";
import {
  useGetSingleBlogQuery,
} from "@/redux/api/blogApi";
import { MUIMultipleValue } from "@/components/Forms/MultipleValue";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import { keywords, UserRole } from "@/types";
import RichtextEditor from "@/components/Forms/RichtextEditor";
import MUIEditor from "@/components/Forms/JodiEditor";
import { getUserInfo } from "@/services/action";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const validationSchema = z.object({
  title: z.string({ required_error: "Title is required." }),
  author: z.string({ required_error: "Author is required." }),
  short_description: z.string({ required_error: "Short description is required." }),
  description: z.string({ required_error: "Description is required." }),
  blog_image: z.string({ required_error: "Image is required." }),
});

const UpdateBlog = ({ id }: { id: string }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const editor = useRef<any | null>(null);
  const token = getCookie("mui-token");
  const { data: blog, isLoading: blogLoading, refetch: refetchBlog } = useGetSingleBlogQuery(id);
  const [content, setContent] = useState<string>("");
  const [userRole, setUserRole] = React.useState<UserRole | null>(null);

  React.useEffect(() => {
      const fetchUserInfo = async () => {
          const userInfo = await getUserInfo();

          setUserRole(userInfo?.role || null);
      };

      fetchUserInfo();
  }, []);

  
const keyword = Array.isArray(blog?.seo_keyword)
? blog?.seo_keyword.map((service:any) => ({ title: service.title || service }))   
: typeof blog?.seo_keyword === 'string'
? blog?.seo_keyword.split(',').map((service:any) => ({ title: service.trim() }))
: []


  const defaultValues = {
    title: blog?.title || "",
    short_description: blog?.short_description || "",
    description: blog?.description || "",
    author: blog?.author || "",
    blog_image: blog?.blog_image || "",
    seo_title: blog?.seo_title || "",
    seo_keyword: keyword || "",
    seo_description: blog?.seo_description || "",
  };


  useEffect(() => {
    if (blog) {
      setImageUrl(blog.blog_image);
      setContent(blog.description || "");
    }
  }, [blog]);

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage([]);

    data.blog_image = imageUrl;
    if (Array.isArray(data.seo_keyword)) {
      data.seo_keyword = data.seo_keyword.map((keywordObj: { title: string }) => keywordObj.title);
    }
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
        router.push(`/dashboard/${userRole}/blogs`);
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
      <MUIForm onSubmit={handleSubmit} defaultValues={{ ...defaultValues }}>
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
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MUIInput
                  name="author"
                  label="Blog Author"
                  type="text"
                  fullWidth
                  size="medium"
                />
              </Grid>

              <Grid item xs={12}>
                <MUIInput
                  name="short_description"
                  label="Short Description"
                  type="text"
                  fullWidth
                  multiline
                  rows={6}
                  size="medium"
                />
              </Grid>

              <Grid item xs={12}>
              {/* <RichtextEditor
                    name="description"
                    label="Description"
                    placeholder="Write your blog post here"
                  />
                 */}
                 <MUIEditor name="description" label="Description" />
              </Grid>

              <Grid item xs={12}>
                <MUIFileUploader
                  name="blog_image"
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Grid>
            </Grid>
            <Box sx={{ marginTop: "50px" }}>
              <Typography component="h2" variant="h5" fontWeight="bold">
                SEO SECTION
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <MUIInput
                    name="seo_title"
                    label="Seo Title"
                    type="text"
                    fullWidth
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
                    label="Seo Description"
                    type="text"
                    multiline
                    fullWidth
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
              {loading ? "Updating..." : "Update Blog"}
            </Button>
          </CardActions>
        </Card>
      </MUIForm>
    </Stack>
  );
};

export default UpdateBlog;
