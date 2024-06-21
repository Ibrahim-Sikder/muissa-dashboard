"use client";
import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";

import {
  Payments,
  PaymentsTable,
} from "@/components/Dashboard/pages/payments/PaymentsTable";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import axios from "axios";
import { useGetAllPaymentsQuery } from "@/redux/api/paymentApi";

// const payments: Payments[] = [
//   {
//     transactionId: "D-123456",
//     date: dayjs().subtract(1, "day").format("DD/MM/YYYY"),
//     month: dayjs().subtract(1, "day").format("MMMM"),
//     amount: "$100",
//     paymentMethod: "Bkash",
//     name: "John Doe",
//     phone: "01712345678",
//     membershipId: "M-123456",
//   },
//   {
//     transactionId: "D-123457",
//     date: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
//     month: dayjs().subtract(2, "day").format("MMMM"),
//     amount: "$200",
//     paymentMethod: "Nagad",
//     name: "Jane Doe",
//     phone: "01712345679",
//     membershipId: "M-123457",
//   },
//   {
//     transactionId: "D-123458",
//     date: dayjs().subtract(3, "day").format("DD/MM/YYYY"),
//     month: dayjs().subtract(3, "day").format("MMMM"),
//     amount: "$300",
//     paymentMethod: "Rocket",
//     name: "John Doe",
//     phone: "01712345678",
//     membershipId: "M-123456",
//   },
//   {
//     transactionId: "D-123459",
//     date: dayjs().subtract(4, "day").format("DD/MM/YYYY"),
//     month: dayjs().subtract(4, "day").format("MMMM"),
//     amount: "$400",
//     paymentMethod: "Bkash",
//     name: "Jane Doe",
//     phone: "01712345679",
//     membershipId: "M-123457",
//   },
//   {
//     transactionId: "D-123460",
//     date: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
//     month: dayjs().subtract(5, "day").format("MMMM"),
//     amount: "$500",
//     paymentMethod: "Nagad",
//     name: "John Doe",
//     phone: "01712345678",
//     membershipId: "M-123456",
//   },
// ];

export default function Page(): React.JSX.Element {
  // const page = 0;
  // const rowsPerPage = 5;

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

  const handlePaymentStatus = async (id: string, status: string) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/payments/${id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        refetch();
        setLoading(false);
      }
    } catch (error: any) {
      if (error?.response) {
        const { status, data } = error.response;
        if ([400, 404, 401, 409, 500].includes(status)) {
          toast.error(data?.message[0]);
        } else {
          toast.error("An unexpected error occurred.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

 
  return (
    <Stack spacing={3}>
      <PaymentsTable
        count={data?.payments?.length}
        page={page}
        rows={data?.payments}
        rowsPerPage={rowsPerPage}
        setFilterType={setFilterType}
        handlePaymentStatus={handlePaymentStatus}
      />
    </Stack>
  );
}

function applyPagination(
  rows: Payments[],
  page: number,
  rowsPerPage: number
): Payments[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Payments",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };
