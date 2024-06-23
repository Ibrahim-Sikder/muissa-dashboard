"use client";
import * as React from "react";
import type { Metadata } from "next";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaPlus } from "react-icons/fa";
import dayjs from "dayjs";

import Link from "next/link";
import {
  Review,
  ReviewsTable,
} from "@/components/Dashboard/pages/reviews/ReviewsTable";
import { usePathname } from "next/navigation";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loader from "@/components/Loader";

export default function ReviewsPage(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;
  const pathName = usePathname();
  // const paginatedReviews = applyPagination(reviews, page, rowsPerPage);

  const { data, error, isLoading, refetch } = useGetAllReviewsQuery({
    page,
    limit: rowsPerPage,
  });

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading || error) {
    return <Loader />;
  }

  return (
    <Stack spacing={3}>
      <ReviewsTable
        count={data?.reviews?.length}
        page={page}
        rows={data?.reviews}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(
  rows: Review[],
  page: number,
  rowsPerPage: number
): Review[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Reviews",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };
