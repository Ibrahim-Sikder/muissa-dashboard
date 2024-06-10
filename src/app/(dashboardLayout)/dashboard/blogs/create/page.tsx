import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const CreateBlog = dynamic(
  () => import("@/components/Dashboard/pages/blogs/CreateBlog"),
  {
    ssr: false,
  }
);

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
