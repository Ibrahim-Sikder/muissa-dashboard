"use client";

import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { FaPlus, FaTrash } from "react-icons/fa";
import MUIModal from "@/components/shared/MUIModal/MUIModal";
import ServiceCategoryForm from "./ServiceCategoryForm";
import ServiceSubcategoryTable from "./ServiceSubcategoryTable";
import ServiceCategoryTable from "./ServiceCategoryTable";
import ServiceSubcategoryForm from "./ServiceSubcategoryForm";
import DOMPurify from "dompurify";
import dayjs from "dayjs";
import { FaPencil } from "react-icons/fa6";

function noop(): void {
  // do nothing
}

export interface Service {
  _id: string;
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          <Stack direction={isMobile ? "column" : "row"} spacing={1}>
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
              Categories
            </Button>
            <Button
              color="primary"
              variant="outlined"
              size="small"
              onClick={() => setOpenSubModal(true)}
            >
              Subcategories
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
              {!isMobile && <TableCell>Short Description</TableCell>}
              <TableCell>Description</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow
                hover
                key={index}
                sx={{
                  textAlign: "left",
                }}
              >
                <TableCell>
                  <Avatar src={row?.service_image} variant="square" />
                </TableCell>
                <TableCell>{row?.title}</TableCell>
                {!isMobile && <TableCell>{row?.short_description}</TableCell>}
                <TableCell
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(row?.description),
                  }}
                />
                <TableCell>
                  {dayjs(row?.createdAt).format("MMM D, YYYY")}
                </TableCell>

                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <Link href={`/dashboard/services/edit/${row?._id}`}>
                      <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        sx={{ textTransform: "none" }}
                        startIcon={<FaPencil />}
                      >
                        Update
                      </Button>
                    </Link>

                    <Button
                      color="error"
                      variant="outlined"
                      size="small"
                      sx={{ textTransform: "none" }}
                      startIcon={<FaTrash />}
                    >
                      Delete
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
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
          <ServiceCategoryForm setModalOpen={setModalOpen} />
          <ServiceCategoryTable />
        </MUIModal>
      )}
      {openSubModal && (
        <MUIModal
          open={openSubModal}
          setOpen={setOpenSubModal}
          title="Add new service subcategory"
        >
          <ServiceSubcategoryForm setModalOpen={setModalOpen} />
          <ServiceSubcategoryTable />
        </MUIModal>
      )}
    </Card>
  );
}
