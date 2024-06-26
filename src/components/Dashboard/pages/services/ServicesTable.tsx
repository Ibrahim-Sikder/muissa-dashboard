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
import { FaEye, FaPlus, FaTrash } from "react-icons/fa";
import MUIModal from "@/components/shared/MUIModal/MUIModal";
import ServiceCategoryForm from "./ServiceCategoryForm";
import ServiceSubcategoryTable from "./ServiceSubcategoryTable";
import ServiceCategoryTable from "./ServiceCategoryTable";
import ServiceSubcategoryForm from "./ServiceSubcategoryForm";
import DOMPurify from "dompurify";
import dayjs from "dayjs";
import { FaPencil } from "react-icons/fa6";
import { useDeleteServiceMutation } from "@/redux/api/serviceApi";
import DeleteButtonWithConfirmation from "@/components/DeleteButtonWithConfirmation";
import { TServices } from "@/types";

function noop(): void {
  // do nothing
}



interface ServicesTableProps {
  count?: number;
  page?: number;
  rows?: TServices[];
  rowsPerPage?: number;
}

export function ServicesTable({
  count = 0,
  rows = [],
  page = 0,
  rowsPerPage = 0,
  loading,
  error
}: ServicesTableProps): React.JSX.Element {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [openSubModal, setOpenSubModal] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [deleteService, { isLoading: isDeletingService }] =
    useDeleteServiceMutation();

  const handleDeleteService = async (serviceId: string) => {
    await deleteService(serviceId);
  };

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

      <Box>

        <Box sx={{ overflowX: "auto" }}>
          <Table sx={{ minWidth: "800px" }}>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Service Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Subctegories</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Published Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Avatar
                      alt={row.title}
                      src={row.service_image}
                      sx={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.sub_category}</TableCell>
                  <TableCell>{row.priority}</TableCell>
                  <TableCell>
                    {dayjs(row.createdAt).format("DD MMM YYYY")}
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Link href={`/dashboard/services/${row._id}`}>
                        <Button
                          color="secondary"
                          variant="outlined"
                          size="small"
                          startIcon={<FaEye />}
                        >
                          View
                        </Button>
                      </Link>

                      <Link href={`/dashboard/services/edit/${row._id}`}>
                        <Button
                          color="primary"
                          variant="outlined"
                          size="small"
                          startIcon={<FaPencil />}
                        >
                          Edit
                        </Button>
                      </Link>
                      <DeleteButtonWithConfirmation
                        onDelete={() => handleDeleteService(row._id)}
                        isLoading={isDeletingService}
                      />
                    </Stack>
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
      </Box>
    </Card>
  );
}
