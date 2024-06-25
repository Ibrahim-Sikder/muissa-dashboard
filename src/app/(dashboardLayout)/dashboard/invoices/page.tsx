"use client";
import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import {
  Invoice,
  InvoicesTable,
} from "@/components/Dashboard/pages/invoices/InvoicesTable";
import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { useGetAllPaymentsQuery } from "@/redux/api/paymentApi";
import Loader from "@/components/Loader";

export default function Page(): React.JSX.Element {
  // const page = 0;
  // const rowsPerPage = 5;

  // const paginatedInvoices = applyPagination(invoices, page, rowsPerPage);
  const [loading, setLoading] = React.useState(false);
  // const paginatedBlogs = applyPagination(payments, page, rowsPerPage);

  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [filterType, setFilterType] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState();
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
      const { status, data } = error as any;
      if ([400, 404, 401, 409, 500].includes(status)) {
        setErrorMessage(data?.message);
      } else {
        setErrorMessage(["An unexpected error occurred."]);
      }
    }
  }, [error]);

  if (isLoading) {
    return <Loader />;
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
