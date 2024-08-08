
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const UpdateReview = dynamic(
  () => import("@/components/Dashboard/pages/reviews/UpdateReview"),
  {
    ssr: false,
  }
);

export default function CreateBlogPage({ params }: { params: { id: string } }) {
  return (
    <Stack spacing={3}>
      <UpdateReview id={params.id} />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Blogs",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
