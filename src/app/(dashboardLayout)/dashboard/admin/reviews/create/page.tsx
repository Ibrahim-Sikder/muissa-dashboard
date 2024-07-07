import CreateBlog from "@/components/Dashboard/pages/blogs/CreateBlog";
import CreateReview from "@/components/Dashboard/pages/reviews/CreateReview";
import CreateReviewAdmin from "@/components/Dashboard/pages/reviews/CreateReviewAdmin";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export default function CreateBlogPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Add a new review</Typography>
      </div>
      <CreateReviewAdmin />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Reviews",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
