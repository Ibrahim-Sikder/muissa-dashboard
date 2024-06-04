"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardHeader, Stack } from "@mui/material";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import MUIModal from "@/components/shared/MUIModal/MUIModal";
import ServiceCategoryForm from "./ServiceCategoryForm";

function noop(): void {
  // do nothing
}

export interface Service {
  name: string;
  description: string;
  status: string;
  lastUpdated: string;
  image: string;
}

interface ServicesTableProps {
  count?: number;
  page?: number;
  rows?: Service[];
  rowsPerPage?: number;
}

export function ServicesTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
}: ServicesTableProps): React.JSX.Element {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h5" fontWeight={700}>
            Services
          </Typography>
        }
        subheader="List of services provided by the company"
        action={
          <Stack direction="row" spacing={1}>
            <Link href="/dashboard/services/create">
              <Button
                color="primary"
                size="small"
                variant="contained"
                startIcon={<FaPlus />}
              >
                Add new service
              </Button>
            </Link>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => setModalOpen(true)}
            >
              categories
            </Button>
          </Stack>
        }
      />

      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px" }}>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Service Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow hover key={index}>
                  <TableCell>
                    <Avatar src={row.image} variant="square" />
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.lastUpdated}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={count}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
      {modalOpen && (
        <MUIModal
          open={modalOpen}
          setOpen={setModalOpen}
          title="Add new service category"
        >
          <ServiceCategoryForm />
        </MUIModal>
      )}
    </Card>
  );
}
