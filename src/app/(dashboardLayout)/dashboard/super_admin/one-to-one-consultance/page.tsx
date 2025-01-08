"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import EditIcon from "@mui/icons-material/Edit";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, MenuItem, Pagination, Select, Stack, Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Swal from "sweetalert2";
import { useDeletConsultancyMettingMutation, useGetAllConsultancyMettingQuery, useUpdateConsultancyMettingMutation } from "@/redux/api/mettingApi";
import Loader from "@/components/Loader";
import MUIForm from "@/components/Forms/Form";
import MUISelect from "../book-metting/Select";
import { toast } from "sonner";
type TStatusForm = {
    status: 'Pending' | 'Completed' | 'Rejected';
};

const PrisonsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: mettingData, isLoading } = useGetAllConsultancyMettingQuery({
        page: currentPage,
        limit: 5,
        sort: "createdAt",
        order: "desc",
    });
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<
        string | null
    >(null);
    const [deletConsultancyMetting] = useDeletConsultancyMettingMutation();
    const [updateConsultancyMetting] = useUpdateConsultancyMettingMutation();

    const handleDelete = async (id: string) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deletConsultancyMetting({ id }).unwrap();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your consultancy has been deleted.",
                        icon: "success",
                    });
                } catch (err: any) {
                    console.error(err);
                }
            }
        });
    };
    const handleStatusSubmit = async (data: TStatusForm) => {
        try {
            await updateConsultancyMetting({
                id: selectedAppointmentId,
                status: data.status,
            }).unwrap();

            toast.success("Status updated successfully!");
        } catch (err: any) {
            toast.error(err.message || "Something went wrong!");
        }
    };


    if (isLoading) {
        return <Loader />;
    }

    const { consultancyMettings = [], meta = {} } = mettingData?.consultancyMettings || {};
    const { totalPage = 1 } = meta;

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const tableHeadStyle = { fontWeight: "bold", fontSize: "1.2rem", color: "#00305C" }

    return (
        <>
            <Box>
                <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="h5" fontWeight="bold">
                        All Client List
                    </Typography>
                </Box>
                <Box bgcolor="white" padding={3} sx={{ width: "100%", overflowX: "auto" }}>
                    <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        SL No
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Full Name
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        WhatsApp Number
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Profession
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Meeting Topic
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Meeting Time
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Meeting Date
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Status
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={tableHeadStyle}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mettingData?.consultancyMettings?.map((data: any, index: number) => (
                                    <TableRow key={data._id}>
                                        <TableCell align="center">{index + 1}</TableCell>
                                        <TableCell align="center">{data.fullName}</TableCell>
                                        <TableCell align="center">{data.whatsappNumber}</TableCell>
                                        <TableCell align="center">{data.profession}</TableCell>
                                        <TableCell align="center">{data.mettingTopic}</TableCell>
                                        <TableCell align="center">{data.mettingTime}</TableCell>
                                        <TableCell align="center">{new Date(data.mettingDate).toLocaleDateString()}</TableCell>
                                        <TableCell align="center">{data.status}</TableCell>


                                        <TableCell align="center">
                                            <Box display='flex' alignItems='center'>
                                                <MUIForm onSubmit={(data) => {
                                                    const status = data[`status-${selectedAppointmentId}`];
                                                    if (status) {
                                                        handleStatusSubmit({ status });
                                                    }
                                                }}>
                                                    <MUISelect
                                                        sx={{ width: "130px", }}
                                                        items={["Pending", "Completed", "Rejected"]}
                                                        name={`status-${data._id}`}
                                                        label="Status"
                                                        defaultValue={data.status}
                                                        onChange={(status) => {
                                                            setSelectedAppointmentId(data._id);
                                                            handleStatusSubmit({ status });
                                                        }}
                                                    />
                                                </MUIForm>
                                                <IconButton
                                                    sx={{
                                                        color: "white",
                                                        background: "red",
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: '100%',
                                                        marginLeft: "8px",
                                                        "&:hover": { background: "darkred" },
                                                    }}
                                                    onClick={() => handleDelete(data._id)}
                                                    title="Delete"
                                                >
                                                    <DeleteIcon />
                                                </IconButton>

                                            </Box>
                                        </TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Stack spacing={2} justifyContent="center" alignItems="center" mt={2}>
                <Pagination count={totalPage} page={currentPage} onChange={handlePageChange} color="secondary" />
            </Stack>
        </>
    );
};

export default PrisonsPage;
