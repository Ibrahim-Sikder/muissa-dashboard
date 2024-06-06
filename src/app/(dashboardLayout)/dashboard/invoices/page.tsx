import * as React from "react";
import type { Metadata } from "next";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import {
  Invoice,
  InvoicesTable,
} from "@/components/Dashboard/pages/invoices/InvoicesTable";

const invoices: Invoice[] = [
  {
    invoiceId: "I-123456",
    date: dayjs().subtract(1, "day").format("DD/MM/YYYY"),
    dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
    amount: "$100",
    status: "Paid",
    clientName: "John Doe",
    clientEmail: "john@example.com",
  },
  {
    invoiceId: "I-123457",
    date: dayjs().subtract(2, "day").format("DD/MM/YYYY"),
    dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
    amount: "$200",
    status: "Pending",
    clientName: "Jane Doe",
    clientEmail: "jane@example.com",
  },
  {
    invoiceId: "I-123458",
    date: dayjs().subtract(3, "day").format("DD/MM/YYYY"),
    dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
    amount: "$300",
    status: "Overdue",
    clientName: "John Doe",
    clientEmail: "john@example.com",
  },
  {
    invoiceId: "I-123459",
    date: dayjs().subtract(4, "day").format("DD/MM/YYYY"),
    dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
    amount: "$400",
    status: "Paid",
    clientName: "Jane Doe",
    clientEmail: "jane@example.com",
  },
  {
    invoiceId: "I-123460",
    date: dayjs().subtract(5, "day").format("DD/MM/YYYY"),
    dueDate: dayjs().add(14, "day").format("DD/MM/YYYY"),
    amount: "$500",
    status: "Pending",
    clientName: "John Doe",
    clientEmail: "john@example.com",
  },
];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedInvoices = applyPagination(invoices, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <InvoicesTable
        count={invoices.length}
        page={page}
        rows={paginatedInvoices}
        rowsPerPage={rowsPerPage}
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

export const metadata: Metadata = {
  title: "Muissa Consulting | Invoices",
  description: "Muissa Consulting invoices page",
  keywords: "invoices, Muissa Consulting",
};
