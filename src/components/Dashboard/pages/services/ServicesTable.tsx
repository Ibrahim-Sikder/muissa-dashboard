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
import ServiceSubcategoryTable from "./ServiceSubcategoryTable";
import ServiceCategoryTable from "./ServiceCategoryTable";
import ServiceSubcategoryForm from "./ServiceSubcategoryForm";
import DOMPurify from 'dompurify';
import dayjs from "dayjs";

function noop(): void {
  // do nothing
}

export interface Service {
  title: string;
  description: string;
  short_description: string;
  createdAt: string;
  service_image: string;
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
  const [openSubModal, setOpenSubModal] = React.useState(false);



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

            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => setOpenSubModal(true)}
            >
              subcategories
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
              <TableCell> Short description </TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => {
              return (
                <TableRow hover key={index}>
                  <TableCell>
                    <Avatar src={row?.service_image} variant="square" />
                  </TableCell>
                  <TableCell>{row?.title}</TableCell>
                  <TableCell>{row?.short_description.slice(0, 50)}</TableCell>
                  <TableCell dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(row?.description.slice(0,30)) }} />

                 
                  <TableCell>{dayjs(row?.createdAt).format("MMM D, YYYY")}</TableCell>
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
          <ServiceCategoryForm setModalOpen={setModalOpen}/>
          <ServiceCategoryTable />
        </MUIModal>
      )}

      {openSubModal && (
        <MUIModal
          open={openSubModal}
          setOpen={setOpenSubModal}
          title="Add new service subcategory"
        >
          <ServiceSubcategoryForm setModalOpen={setModalOpen}/>
          <ServiceSubcategoryTable />
        </MUIModal>
      )}
    </Card>
  );
}
