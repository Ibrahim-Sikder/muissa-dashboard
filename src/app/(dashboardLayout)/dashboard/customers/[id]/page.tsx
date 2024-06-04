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

// Mock customer data (replace with actual data fetching logic)
const customer = {
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
};

export default function CustomerDetailsPage() {
  return (
    <>
      <Link href="/dashboard/customers" passHref>
        <Button
          startIcon={<ArrowBackIcon />}
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Back to Customers
        </Button>
      </Link>
      <Box className="bg-white shadow rounded-lg p-6">
        <Stack direction="row" spacing={3} alignItems="center" mb={4}>
          <Avatar
            alt={customer.name}
            src={customer.avatar}
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h4" fontWeight="bold">
              {customer.name}
            </Typography>
            <Chip label={`Customer ID: ${customer.id}`} color="secondary" />
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
                <Typography>{customer.email}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon color="action" />
                <Typography>{customer.phone}</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <HomeIcon color="action" />
                <Box>
                  <Typography>{customer.address.street}</Typography>
                  <Typography>{`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}</Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Typography variant="body2" color="textSecondary">
          Member since: {dayjs(customer.createdAt).format("MMMM D, YYYY")}
        </Typography>
      </Box>
    </>
  );
}
