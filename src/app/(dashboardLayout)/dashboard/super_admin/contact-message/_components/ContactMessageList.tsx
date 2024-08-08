
"use client";

import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useCallback, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import Loader from "@/components/Loader";
import { useDeleteUserMutation, useGetAllUserQuery } from "@/redux/api/userApi";
import { getCookie } from "@/helpers/Cookies";
import { toast } from "sonner";
import axios from "axios";
import { useGetAllClientQuery } from "@/redux/api/clientApi";

const ContactMessageList = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const token = getCookie("mui-token");

    const {
        data: clientData, isLoading, error, refetch
    } = useGetAllClientQuery({ token });

    const handleDelete = useCallback(
        async (id: string) => {
            setLoading(true);

            try {
                const response = await axios.delete(
                    `${process.env.NEXT_PUBLIC_BASE_API_URL}/clients/${id}`,

                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response?.status === 200) {
                    toast.success(response?.data?.message);
                    refetch();

                    setLoading(false);
                }
            } catch (error: any) {
                if (error?.response) {
                    const { status, data } = error.response;
                    if ([400, 401, 409, 404, 500].includes(status)) {
                        toast.error(data.message);
                    } else {
                        toast.error(["An unexpected error occurred."]);
                    }
                }
            } finally {
                setLoading(false);
            }
        },
        [refetch, token]
    );

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1, minWidth: 50 },
        { field: "email", headerName: "Email", flex: 1, minWidth: 50 },
        { field: "phone", headerName: "Phone", flex: 1, minWidth: 50 },
        { field: "message", headerName: "Message", flex: 3, minWidth: 250 },
        {
            field: "actions",
            headerName: "Actions",
            flex: 1,
            minWidth: 50,
            sortable: false,
            renderCell: (params) => {


                const handleDeleteUser = () => {
                    handleDelete(params.row._id);
                };

                return (
                    <Stack direction="row" spacing={1}>
                        
                        <IconButton
                            disabled={loading}
                            sx={{ color: "red" }}
                            onClick={handleDeleteUser}
                        >
                            <DeleteIcon sx={{ color: "red" }} />
                        </IconButton>
                    </Stack>
                );
            },
        },
    ];



    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>Something went wrong</div>;
    }


    return (
        <Box>
            <Box sx={{ width: "100%", padding: 2 }}>

                <h2 className="mb-5 text-center">Contact Message list </h2>


                <Box sx={{ height: "calc(100vh - 150px)", width: "100%" }}>
                    <DataGrid
                        rows={clientData}
                        columns={columns}
                        autoHeight
                        getRowId={(row) => row._id}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#ddffdd",
                            },
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ContactMessageList;
