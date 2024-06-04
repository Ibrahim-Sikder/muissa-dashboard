import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";

import {
  Payments,
  PaymentsTable,
} from "@/components/Dashboard/pages/payments/PaymentsTable";

export const metadata = {
  title: `payments | Dashboard | ${process.env.NEXT_PUBLIC_APP_NAME}`,
} satisfies Metadata;

const payments: Payments[] = [
  {
    transactionId: "D-123456",
    date: dayjs().subtract(1, "day").format("DD/MM/YYYY"),
    month: dayjs().subtract(1, "day").format("MMMM"),
    amount: "$100",
    paymentMethod: "Bkash",
  },
  {
    transactionId: "D-123457",
    date: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
    month: dayjs().subtract(2, "day").format("MMMM"),
    amount: "$200",
    paymentMethod: "Nagad",
  },
  {
    transactionId: "D-123458",
    date: dayjs().subtract(3, "day").format("DD/MM/YYYY"),
    month: dayjs().subtract(3, "day").format("MMMM"),
    amount: "$300",
    paymentMethod: "Rocket",
  },
  {
    transactionId: "D-123459",
    date: dayjs().subtract(4, "day").format("DD/MM/YYYY"),
    month: dayjs().subtract(4, "day").format("MMMM"),
    amount: "$400",
    paymentMethod: "Bkash",
  },
  {
    transactionId: "D-123460",
    date: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
    month: dayjs().subtract(5, "day").format("MMMM"),
    amount: "$500",
    paymentMethod: "Nagad",
  },
];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedBlogs = applyPagination(payments, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <PaymentsTable
        count={payments.length}
        page={page}
        rows={paginatedBlogs}
        rowsPerPage={rowsPerPage}
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
