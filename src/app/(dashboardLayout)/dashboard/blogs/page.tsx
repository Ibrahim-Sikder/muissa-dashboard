"use client";
import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import {
  Blog,
  BlogsTable,
} from "@/components/Dashboard/pages/blogs/BlogsTable";
import { getCookie } from "@/helpers/Cookies";
import { useGetAllBlogsQuery } from "@/redux/api/baseApi";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Blogs",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };

// const blogs: Blog[] = [
//   {
//     title: "Understanding React Hooks",
//     author: "Jane Doe",
//     publishDate: dayjs().subtract(1, "day").format("MMMM D, YYYY"),
//     status: "Published",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "Next.js vs. Gatsby: A Comparison",
//     author: "John Smith",
//     publishDate: dayjs().subtract(5, "days").format("MMMM D, YYYY"),
//     status: "Draft",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "CSS Grid Layout Tutorial",
//     author: "Alice Johnson",
//     publishDate: dayjs().subtract(2, "days").format("MMMM D, YYYY"),
//     status: "Published",
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     title: "How to Use TypeScript with React",
//     author: "Bob Brown",
//     publishDate: dayjs().subtract(3, "days").format("MMMM D, YYYY"),
//     status: "Published",
//     image: "https://via.placeholder.com/150",
//   },
// ];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const pathName = usePathname();

  // const paginatedBlogs = applyPagination(blogs, page, rowsPerPage);

  // const [currentPage, setCurrentPage] = React.useState(1);
  // const [limit, setLimit] = React.useState(10);

  const { data, error, isLoading, refetch } = useGetAllBlogsQuery({
    page,
    limit: rowsPerPage,
  });
  // const paginatedBlogs = applyPagination(data?.blogs, page, rowsPerPage);

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading || error) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={3}>
      <BlogsTable
        count={data?.blogs?.length}
        page={page}
        rows={data?.blogs}
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
