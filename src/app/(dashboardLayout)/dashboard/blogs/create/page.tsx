import CreateBlog from "@/components/Dashboard/pages/blogs/CreateBlog";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";

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

export const metadata = {
  title: `Blogs | Dashboard | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
} satisfies Metadata;
