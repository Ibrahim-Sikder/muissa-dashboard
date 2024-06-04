import CreateBlog from "@/components/Dashboard/pages/blogs/CreateBlog";
import CreateReview from "@/components/Dashboard/pages/reviews/CreateReview";
import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";

export default function CreateBlogPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Add a new review</Typography>
      </div>
      <CreateReview />
    </Stack>
  );
}

export const metadata = {
  title: `Reviews | Dashboard | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
} satisfies Metadata;
