"use client";
import * as React from "react";
import type { Metadata } from "next";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  Customer,
  CustomersTable,
} from "@/components/Dashboard/pages/customers/CustomersTable";
import { FaEye, FaPlus } from "react-icons/fa";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import { getCookie } from "@/helpers/Cookies";
import axios from "axios";
import { toast } from "sonner";
import { ErrorMessage } from "@/components/error-message";
import { useGetAllMembersQuery } from "@/redux/api/memeberApi";
import Loader from "@/components/Loader";

// export const metadata = {
//   title: `Customers | Dashboard | ${process.env.NEXT_PUBLIC_APP_NAME}`,
// } satisfies Metadata;

export default function Page(): React.JSX.Element {
  const [members, serMembers] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [filterType, setFilterType] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const page = 0;
  const rowsPerPage = 10;

  const token = getCookie("mui-token");

  const { data, error, isLoading } = useGetAllMembersQuery({
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
      {errorMessage?.length > 0 ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <Stack direction="row" justifyContent="space-between" spacing={3}>
            <Typography variant="h4">Customers</Typography>
            <Stack direction="row" spacing={2}>
              <Button
                color="primary"
                size="small"
                startIcon={<FaEye />}
                variant="contained"
                onClick={() => setFilterType("investor")}
              >
                Investors List
              </Button>
              <Button
                color="primary"
                size="small"
                startIcon={<FaEye />}
                variant="contained"
                onClick={() => setFilterType("business_owner")}
              >
                Business Owners List
              </Button>
            </Stack>
          </Stack>
          <CustomersTable
            count={data?.members?.length}
            page={page}
            rows={data?.members}
            limit={limit}
            setLimit={setLimit}
            setFilterType={setFilterType}
          />
        </>
      )}
    </Stack>
  );
}

function applyPagination(
  rows: Customer[],
  page: number,
  rowsPerPage: number
): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
