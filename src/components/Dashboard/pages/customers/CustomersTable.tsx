"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { Button, CardHeader, TextField } from "@mui/material";
import Link from "next/link";
import { EditNotifications } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { UserRole } from "@/types";
import { getUserInfo } from "@/services/action";
export interface Customer {
  id: string;
  avatar: string;
  name: string;
  email: string;
  address: { city: string; state: string; country: string; street: string };
  phone: string;
  createdAt: Date;
  membershipId: string;
}



interface CustomersTableProps {
  count?: number;
  page?: number;
  rows?: BusinessInfo[];
  limit: number;
  setLimit: (page: number) => void;
  setFilterType: (page: string) => void;
  setPage: (page: number) => void;
}

interface UserDetails {
  _id: string;
  auth: string;
  name: string;
  profile_pic: string;
  phone: string;
  email: string;
  address: string;
  userId: string;
}

interface BusinessInfo {
  _id: string;
  userId: string;
  member_type: string;
  upload_file: string;
  userDetails: UserDetails;
  createdAt: Date;
}




export function CustomersTable({
  count = 0,
  rows = [],
  page = 0,
  limit,
  setLimit,
  setFilterType,
  setPage,
}: CustomersTableProps): React.JSX.Element {
  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setLimit(newRowsPerPage);
    setPage(0);
  };

  const [userRole, setUserRole] = React.useState<UserRole | null>(null);

  React.useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();

      setUserRole(userInfo?.role || null);
    };

    fetchUserInfo();
  }, []);



  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardHeader
        title="Customers"
        subheader="List of all customers"
        onClick={() => setFilterType("")}
        action={
          <TextField
            label="Search"
            size="small"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilterType(e.target.value)
            }
            InputProps={{
              endAdornment: (
                <Button
                  color="primary"
                  size="small"
                  variant="contained"
                  sx={{ borderRadius: "0px 4px 4px 0px" }}
                >
                  Search
                </Button>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px 0px 0px 4px",
                paddingRight: "0 !important",
              },
            }}
          />
        }
      />
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ minWidth: "800px", textAlign: "left" }}>
          <TableHead>
            <TableRow>
              <TableCell>Membership ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Signed Up</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover key={row._id}>
                  <TableCell>{row?.userId}</TableCell>
                  <TableCell>
                    <Stack
                      sx={{ alignItems: "center" }}
                      direction="row"
                      spacing={2}
                    >
                      <Avatar src={row?.upload_file} />
                      <Typography variant="subtitle2">
                        {row?.userDetails?.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    {row?.userDetails?.email
                      ? row?.userDetails?.email
                      : row?.userDetails?.auth}
                  </TableCell>
                  <TableCell>
                    {row?.userDetails?.phone
                      ? row?.userDetails?.phone
                      : row?.userDetails?.auth}
                  </TableCell>
                  <TableCell>
                    {dayjs(row?.createdAt).format("MMM D, YYYY")}
                  </TableCell>

                  <TableCell align="center">
                    <div className='flex '>
                      <Link href={`/dashboard/${userRole}/customers/${row?._id}`}>
                        <IconButton title="See Profile">
                          <VisibilityIcon className='text-[#00305C]' />
                        </IconButton>
                      </Link>

                      <IconButton title="Delete">
                        <DeleteIcon className='text-red-600' />
                      </IconButton>
                    </div>
                  </TableCell>
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
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={limit}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40]}
      />
    </Card>
  );
}
