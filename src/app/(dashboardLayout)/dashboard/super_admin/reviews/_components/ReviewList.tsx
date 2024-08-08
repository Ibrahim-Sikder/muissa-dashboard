"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";

import {
  Review,
  ReviewsTable,
} from "@/components/Dashboard/pages/reviews/ReviewsTable";
import { usePathname } from "next/navigation";
import { useGetAllReviewsQuery } from "@/redux/api/reviewApi";
import Loader from "@/components/Loader";

export default function ReviewList(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;
  const pathName = usePathname();
 

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
