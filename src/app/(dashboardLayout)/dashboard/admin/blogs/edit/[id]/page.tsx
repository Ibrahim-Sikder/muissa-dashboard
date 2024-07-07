import UpdateBlogAdmin from "@/components/Dashboard/pages/blogs/UpdateBlogAdmin";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const UpdateBlog = dynamic(
  () => import("@/components/Dashboard/pages/blogs/UpdateBlog"),
  {
    ssr: false,
  }
);

export default function CreateBlogPage({ params }: { params: { id: string } }) {
  return (
    <Stack spacing={3}>
      <UpdateBlogAdmin id={params.id} />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Blogs",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
