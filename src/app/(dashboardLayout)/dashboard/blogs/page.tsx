import * as React from "react";
import type { Metadata } from "next";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import {
  Blog,
  BlogsTable,
} from "@/components/Dashboard/pages/blogs/BlogsTable";
import Link from "next/link";

export const metadata = {
  title: `Blogs | Dashboard | ${process.env.NEXT_PUBLIC_APP_NAME}`,
} satisfies Metadata;

const blogs: Blog[] = [
  {
    title: "Understanding React Hooks",
    author: "Jane Doe",
    publishDate: dayjs().subtract(1, "day").format("MMMM D, YYYY"),
    status: "Published",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Next.js vs. Gatsby: A Comparison",
    author: "John Smith",
    publishDate: dayjs().subtract(5, "days").format("MMMM D, YYYY"),
    status: "Draft",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "CSS Grid Layout Tutorial",
    author: "Alice Johnson",
    publishDate: dayjs().subtract(2, "days").format("MMMM D, YYYY"),
    status: "Published",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "How to Use TypeScript with React",
    author: "Bob Brown",
    publishDate: dayjs().subtract(3, "days").format("MMMM D, YYYY"),
    status: "Published",
    image: "https://via.placeholder.com/150",
  },
];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedBlogs = applyPagination(blogs, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent="space-between" spacing={3}>
        <Typography variant="h4">Blogs</Typography>
        <Link href="/dashboard/blogs/create" passHref>
          <Button
            color="primary"
            size="small"
            startIcon={<FaPlus />}
            variant="contained"
          >
            Create new blog
          </Button>
        </Link>
      </Stack>
      <BlogsTable
        count={blogs.length}
        page={page}
        rows={paginatedBlogs}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(
  rows: Blog[],
  page: number,
  rowsPerPage: number
): Blog[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
