"use client"
import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import {
  Invoice,
  InvoicesTable,
} from "@/components/Dashboard/pages/invoices/InvoicesTable";
import { getCookie } from "@/helpers/Cookies";
import { useGetAllPaymentsQuery } from "@/redux/api/baseApi";
import axios from "axios";
import { toast } from "sonner";

// const invoices: Invoice[] = [
//   {
//     invoiceId: "I-123456",
//     date: dayjs().subtract(1, "day").format("DD/MM/YYYY"),
//     dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
//     amount: "$100",
//     status: "Paid",
//     clientName: "John Doe",
//     clientEmail: "john@example.com",
//   },
//   {
//     invoiceId: "I-123457",
//     date: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
//     dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
//     amount: "$200",
//     status: "Pending",
//     clientName: "Jane Doe",
//     clientEmail: "jane@example.com",
//   },
//   {
//     invoiceId: "I-123458",
//     date: dayjs().subtract(3, "day").format("DD/MM/YYYY"),
//     dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
//     amount: "$300",
//     status: "Overdue",
//     clientName: "John Doe",
//     clientEmail: "john@example.com",
//   },
//   {
//     invoiceId: "I-123459",
//     date: dayjs().subtract(4, "day").format("DD/MM/YYYY"),
//     dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
//     amount: "$400",
//     status: "Paid",
//     clientName: "Jane Doe",
//     clientEmail: "jane@example.com",
//   },
//   {
//     invoiceId: "I-123460",
//     date: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
//     dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
//     amount: "$500",
//     status: "Pending",
//     clientName: "John Doe",
//     clientEmail: "john@example.com",
//   },
// ];

export default function Page(): React.JSX.Element {
  // const page = 0;
  // const rowsPerPage = 5;

  // const paginatedInvoices = applyPagination(invoices, page, rowsPerPage);
  const [loading, setLoading] = React.useState(false);
  // const paginatedBlogs = applyPagination(payments, page, rowsPerPage);

  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [filterType, setFilterType] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const page = 0;
  const rowsPerPage = 10;

  const token = getCookie("mui-token");

  const { data, error, isLoading, refetch } = useGetAllPaymentsQuery({
    token,
    page: currentPage,
    limit,
    filterType,
  });

  React.useEffect(() => {
    if (error) {
      const { status, data } = error;
      if ([400, 404, 401, 409, 500].includes(status)) {
        setErrorMessage(data?.message);
      } else {
        setErrorMessage(["An unexpected error occurred."]);
      }
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Stack spacing={3}>
      <InvoicesTable
        count={data?.payments?.length}
        page={page}
        rows={data?.payments}
        rowsPerPage={rowsPerPage}
        setFilterType={setFilterType}
      />
    </Stack>
  );
}

function applyPagination(
  rows: Invoice[],
  page: number,
  rowsPerPage: number
): Invoice[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Invoices",
//   description: "Muissa Consulting invoices page",
//   keywords: "invoices, Muissa Consulting",
// };
