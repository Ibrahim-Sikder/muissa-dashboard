import CreateBlog from "@/components/Dashboard/pages/blogs/CreateBlog";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import React from "react";

export default function CreateBlogPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Create a new service</Typography>
      </div>
      <CreateBlog />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Blogs",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
