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
import { usePathname } from "next/navigation";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Loader from "@/components/Loader";

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Blogs",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const pathName = usePathname();

  // const paginatedBlogs = applyPagination(blogs, page, rowsPerPage);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const { data, error, isLoading, refetch } = useGetAllBlogsQuery({
    page,
    limit: rowsPerPage,
  });
  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading) {
    return <Loader />;
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
