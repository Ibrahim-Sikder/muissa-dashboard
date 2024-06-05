import CreateBlog from "@/components/Dashboard/pages/blogs/CreateBlog";
import CreateFAQForm from "@/components/Dashboard/pages/faq/FaqForm";
import CreateReview from "@/components/Dashboard/pages/reviews/CreateReview";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";

export default function CreateFaqPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Add a new FAQ</Typography>
      </div>
      <CreateFAQForm />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | FAQ ",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
