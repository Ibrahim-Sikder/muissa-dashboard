"use client";
import * as React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  Button,
  Stack,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { getCookie } from "@/helpers/Cookies";
// import { useGetSingleMemberQuery } from "@/redux/api/baseApi";
import { ErrorMessage } from "@/components/error-message";
import { useGetSingleMemberQuery } from "@/redux/api/memeberApi";
import Loader from "@/components/Loader";

// Mock customer data (replace with actual data fetching logic)

export default function CustomerDetailsPage() {
  const [errorMessage, setErrorMessage] = React.useState<string[]>([]);
  const { id } = useParams();
  const token = getCookie("mui-token");

  const { data, error, isLoading } = useGetSingleMemberQuery({
    token,
    id,
  });

  React.useEffect(() => {
    if (error) {
      const { status, data } = error as any as { status: number; data: any };
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
    <>
      <Link href="/dashboard/admin/customers" passHref>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Back to Customers
        </Button>
      </Link>
      {errorMessage?.length > 0 ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <Box className="bg-white shadow rounded-lg p-6">
          <Stack direction="row" spacing={3} alignItems="center" mb={4}>
            <Avatar
              alt={data?.user?.name}
              src={data?.user?.profile_pic}
              sx={{ width: 80, height: 80 }}
            />
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {data?.user?.name}
              </Typography>
              <Chip
                label={`Customer ID: ${data?.user?.userId}`}
                color="secondary"
              />
            </Box>
          </Stack>
          <Card
            sx={{
              boxShadow: "none",
              border: "1px solid #e0e0e0",
              mb: 4,
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon color="action" />
                  <Typography>
                    {data?.user?.email || data?.user?.auth}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon color="action" />
                  <Typography>
                    {data?.user?.phone || data?.user?.auth}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <HomeIcon color="action" />
                  <Box>
                    <Typography>{data?.user?.address}</Typography>
                    {/* <Typography>{`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}</Typography> */}
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Typography variant="body2" color="textSecondary">
            Member since: {dayjs(data?.createdAt).format("MMMM D, YYYY")}
          </Typography>
        </Box>
      )}
    </>
  );
}
