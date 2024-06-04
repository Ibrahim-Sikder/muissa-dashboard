import * as React from "react";
import type { Metadata } from "next";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  ServicesTable,
  Service,
} from "@/components/Dashboard/pages/services/ServicesTable";
import { FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import Link from "next/link";

export const metadata = {
  title: `Services | Dashboard | ${process.env.NEXT_PUBLIC_APP_NAME}`,
} satisfies Metadata;

const services: Service[] = [
  {
    name: "Product Services",
    description:
      "Assistance with product development, quality assurance, and support.",
    status: "Active",
    lastUpdated: dayjs().subtract(1, "day").format("MMMM D, YYYY"),
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Investment Support",
    description:
      "Guidance on securing investments and managing investor relations.",
    status: "Inactive",
    lastUpdated: dayjs().subtract(5, "days").format("MMMM D, YYYY"),
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sale Support",
    description:
      "Help with sales strategies, training, and customer engagement.",
    status: "Active",
    lastUpdated: dayjs().subtract(2, "days").format("MMMM D, YYYY"),
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Marketing Support",
    description:
      "Support with marketing campaigns, social media, and branding.",
    status: "Active",
    lastUpdated: dayjs().subtract(3, "days").format("MMMM D, YYYY"),
    image: "https://via.placeholder.com/150",
  },
];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedServices = applyPagination(services, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <ServicesTable
        count={services.length}
        page={page}
        rows={paginatedServices}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(
  rows: Service[],
  page: number,
  rowsPerPage: number
): Service[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
