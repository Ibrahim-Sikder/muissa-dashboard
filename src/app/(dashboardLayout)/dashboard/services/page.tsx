"use client";
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
import { getCookie } from "@/helpers/Cookies";
import { useGetAllServicesQuery } from "@/redux/api/baseApi";
import { usePathname } from "next/navigation";

// const services: Service[] = [
//   {
//     name: "Product Services",
//     description:
//       "Assistance with product development, quality assurance, and support.",
//     status: "Active",
//     lastUpdated: dayjs().subtract(1, "day").format("MMMM D, YYYY"),
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Investment Support",
//     description:
//       "Guidance on securing investments and managing investor relations.",
//     status: "Inactive",
//     lastUpdated: dayjs().subtract(5, "days").format("MMMM D, YYYY"),
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Sale Support",
//     description:
//       "Help with sales strategies, training, and customer engagement.",
//     status: "Active",
//     lastUpdated: dayjs().subtract(2, "days").format("MMMM D, YYYY"),
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     name: "Marketing Support",
//     description:
//       "Support with marketing campaigns, social media, and branding.",
//     status: "Active",
//     lastUpdated: dayjs().subtract(3, "days").format("MMMM D, YYYY"),
//     image: "https://via.placeholder.com/150",
//   },
// ];

export default function Page(): React.JSX.Element {
  // const paginatedServices = applyPagination(services, page, rowsPerPage);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const pathName= usePathname()

 

  const { data, error, isLoading, refetch } = useGetAllServicesQuery({
    page: currentPage,
    limit,
  });

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={3}>
      <ServicesTable
        count={data?.services?.length}
        page={currentPage}
        rows={data?.services}
        rowsPerPage={limit}
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

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Services",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };
