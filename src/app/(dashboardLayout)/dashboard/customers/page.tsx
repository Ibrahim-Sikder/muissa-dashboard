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

// export const metadata = {
//   title: `Customers | Dashboard | ${process.env.NEXT_PUBLIC_APP_NAME}`,
// } satisfies Metadata;

const customers = [
  {
    id: "USR-010",
    name: "Alcides Antonio",
    avatar: "/assets/avatar-10.png",
    email: "alcides.antonio@devias.io",
    phone: "908-691-3242",
    address: {
      city: "Madrid",
      country: "Spain",
      state: "Comunidad de Madrid",
      street: "4158 Hedge Street",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-001",
  },
  {
    id: "USR-009",
    name: "Marcus Finn",
    avatar: "/assets/avatar-9.png",
    email: "marcus.finn@devias.io",
    phone: "415-907-2647",
    address: {
      city: "Carson City",
      country: "USA",
      state: "Nevada",
      street: "2188 Armbrester Drive",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-002",
  },
  {
    id: "USR-008",
    name: "Jie Yan",
    avatar: "/assets/avatar-8.png",
    email: "jie.yan.song@devias.io",
    phone: "770-635-2682",
    address: {
      city: "North Canton",
      country: "USA",
      state: "Ohio",
      street: "4894 Lakeland Park Drive",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-003",
  },
  {
    id: "USR-007",
    name: "Nasimiyu Danai",
    avatar: "/assets/avatar-7.png",
    email: "nasimiyu.danai@devias.io",
    phone: "801-301-7894",
    address: {
      city: "Salt Lake City",
      country: "USA",
      state: "Utah",
      street: "368 Lamberts Branch Road",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-004",
  },
  {
    id: "USR-006",
    name: "Iulia Albu",
    avatar: "/assets/avatar-6.png",
    email: "iulia.albu@devias.io",
    phone: "313-812-8947",
    address: {
      city: "Murray",
      country: "USA",
      state: "Utah",
      street: "3934 Wildrose Lane",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-005",
  },
  {
    id: "USR-005",
    name: "Fran Perez",
    avatar: "/assets/avatar-5.png",
    email: "fran.perez@devias.io",
    phone: "712-351-5711",
    address: {
      city: "Atlanta",
      country: "USA",
      state: "Georgia",
      street: "1865 Pleasant Hill Road",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-006",
  },

  {
    id: "USR-004",
    name: "Penjani Inyene",
    avatar: "/assets/avatar-4.png",
    email: "penjani.inyene@devias.io",
    phone: "858-602-3409",
    address: {
      city: "Berkeley",
      country: "USA",
      state: "California",
      street: "317 Angus Road",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-007",
  },
  {
    id: "USR-003",
    name: "Carson Darrin",
    avatar: "/assets/avatar-3.png",
    email: "carson.darrin@devias.io",
    phone: "304-428-3097",
    address: {
      city: "Cleveland",
      country: "USA",
      state: "Ohio",
      street: "2849 Fulton Street",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-008",
  },
  {
    id: "USR-002",
    name: "Siegbert Gottfried",
    avatar: "/assets/avatar-2.png",
    email: "siegbert.gottfried@devias.io",
    phone: "702-661-1654",
    address: {
      city: "Los Angeles",
      country: "USA",
      state: "California",
      street: "1798 Hickory Ridge Drive",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-009",
  },
  {
    id: "USR-001",
    name: "Miron Vitold",
    avatar: "/assets/avatar-1.png",
    email: "miron.vitold@devias.io",
    phone: "972-333-4106",
    address: {
      city: "San Diego",
      country: "USA",
      state: "California",
      street: "75247",
    },
    createdAt: dayjs().subtract(2, "hours").toDate(),
    membershipId: "MEM-010",
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const [members, serMembers] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);

  const [filterType, setFilterType] = React.useState<string>("");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const page = 0;
  const rowsPerPage = 10;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  const token = getCookie("mui-token");

  const { data, error, isLoading } = useGetAllMembersQuery({
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
