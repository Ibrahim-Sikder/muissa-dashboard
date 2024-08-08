"use client";
import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { usePathname } from "next/navigation";
import { useGetAllBlogsQuery } from "@/redux/api/blogApi";
import Loader from "@/components/Loader";
import { BlogsTable } from "@/components/Dashboard/pages/blogs/BlogsTable";

export default function BlogList(): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const pathName = usePathname();

  const { data, error, isLoading, refetch } = useGetAllBlogsQuery({
    page: currentPage + 1, 
    limit: rowsPerPage,
  });

  useEffect(() => {
    refetch();
  }, [pathName, refetch, currentPage, rowsPerPage]);

  if (isLoading) {
    return <Loader />;
  }

  const handlePageChange = (event: any, newPage: number) => {
    setCurrentPage(newPage - 1);
  };

  const handleRowsPerPageChange = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <Stack spacing={3}>
      <BlogsTable
        count={data?.total || 0}
        page={currentPage}
        rows={data?.blogs || []}
        rowsPerPage={rowsPerPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Stack>
  );
}
