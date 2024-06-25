"use client";
import {
  ServicesTable,
} from "@/components/Dashboard/pages/services/ServicesTable";
import Loader from "@/components/Loader";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import { TServices } from "@/types";
import { Box, CircularProgress } from "@mui/material";
import Stack from "@mui/material/Stack";
import { usePathname } from "next/navigation";
import * as React from "react";




export default function Page(): React.JSX.Element {
  // const paginatedServices = applyPagination(services, page, rowsPerPage);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const pathName = usePathname();

  const { data, error, isLoading, refetch } = useGetAllServicesQuery({
    page: currentPage,
    limit,
  });
  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

 


  if (isLoading) {
    return <Loader />;
  }
  
  const sortedServices: TServices[] = [...data.services].sort(
    (a: TServices, b: TServices) => a.priority - b.priority
  );

  return (
    <Stack spacing={3}>
      <ServicesTable
        count={data?.services?.length}
        page={currentPage}
        rows={sortedServices}
        rowsPerPage={limit}
      />
    </Stack>
  );
}

function applyPagination(
  rows: TServices[],
  page: number,
  rowsPerPage: number
): TServices[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Services",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };
