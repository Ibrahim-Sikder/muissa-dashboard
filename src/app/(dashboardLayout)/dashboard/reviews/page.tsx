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

// Sample reviews data
const reviews: Review[] = [
  {
    name: "Jane Doe",
    designation: "Software Engineer",
    image: "https://via.placeholder.com/150",
    message:
      "This product is fantastic! It has significantly improved my productivity.",
    publishDate: dayjs().subtract(1, "day").format("MMMM D, YYYY"),
    status: "Published",
  },
  {
    name: "John Smith",
    designation: "Product Manager",
    image: "https://via.placeholder.com/150",
    message:
      "The product is good but needs some improvements in the user interface.",
    publishDate: dayjs().subtract(5, "days").format("MMMM D, YYYY"),
    status: "Draft",
  },
  {
    name: "Alice Johnson",
    designation: "UX Designer",
    image: "https://via.placeholder.com/150",
    message: "I love the new features and the design is very intuitive.",
    publishDate: dayjs().subtract(2, "days").format("MMMM D, YYYY"),
    status: "Published",
  },
  {
    name: "Bob Brown",
    designation: "CTO",
    image: "https://via.placeholder.com/150",
    message:
      "An excellent product that meets all our needs. Highly recommend it.",
    publishDate: dayjs().subtract(3, "days").format("MMMM D, YYYY"),
    status: "Published",
  },
];

export default function ReviewsPage(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedReviews = applyPagination(reviews, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <ReviewsTable
        count={reviews.length}
        page={page}
        rows={paginatedReviews}
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
