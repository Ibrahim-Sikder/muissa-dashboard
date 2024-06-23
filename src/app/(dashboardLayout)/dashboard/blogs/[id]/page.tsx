"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import Loader from "@/components/Loader";
import { Blog } from "@/components/Dashboard/pages/blogs/BlogsTable";
import DOMPurify from "dompurify";

const BlogDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data, error, isLoading, refetch } = useGetSingleBlogQuery({ id });

  if (isLoading) {
    return <Loader />;
  }

  const blog: Blog = data;

  return (
    <Container maxWidth="xl" className="my-10">
      <Card className="w-full bg-white p-5" sx={{ boxShadow: "none" }}>
        <Button
          onClick={() => router.replace("/dashboard/blogs")}
          variant="contained"
          sx={{ marginBottom: 4 }}
        >
          Go Back
        </Button>

        <CardMedia
          component="img"
          image={blog.blog_image}
          alt={blog.title}
          className="rounded"
          sx={{ maxHeight: 500, objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h4" component="h2" className="mb-4">
            {blog.title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Author: {blog.author}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Published: {new Date(blog.publishDate).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Status: {blog.status}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" color="textSecondary">
                Created: {new Date(blog.createdAt).toLocaleDateString()}
              </Typography>
            </Grid>
          </Grid>
          <Divider className="my-4" />

          <Divider className="my-4" />
          <Typography variant="h6" component="h3" gutterBottom>
            Description
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.short_description as string),
              }}
            />
          </Typography>
          <Divider className="my-4" />
          <Typography variant="h6" component="h3" gutterBottom>
            Full Description
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.description as string),
              }}
            />
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetails;
