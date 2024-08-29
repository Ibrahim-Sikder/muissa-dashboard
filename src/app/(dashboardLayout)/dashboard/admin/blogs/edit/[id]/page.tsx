
import UpdateBlog from "@/app/(dashboardLayout)/dashboard/super_admin/blogs/_components/UpdateBlog";
import { Stack } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";


export default function CreateBlogPage({ params }: { params: { id: string } }) {
  return (
    <Stack spacing={3}>
      <UpdateBlog id={params.id} />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Blogs",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
