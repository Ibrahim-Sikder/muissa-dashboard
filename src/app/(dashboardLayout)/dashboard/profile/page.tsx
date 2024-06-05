import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import type { Metadata } from "next";

export default function UserProfilePage(): React.JSX.Element {
  const user = {
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    streetAddress: "123 Main St",
    city: "Springfield",
    state: "IL",
    postalCode: "62701",
    country: "USA",
    dateOfBirth: "1990-01-01",
    isVerified: true,
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
    <>
      <Box className="bg-white shadow rounded-lg p-6">
        <Box>
          <Typography variant="h4" className="font-semibold text-gray-900">
            Profile
          </Typography>
          <Typography variant="body2" className="mt-1 text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </Typography>
        </Box>
        <Divider className="mt-4" />
        <Box className="mt-6 space-y-6">
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Full name
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900 flex items-center">
                <Avatar
                  src={user.avatarUrl}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="mr-4"
                />
                {user.firstName} {user.lastName}
              </Box>
              <Box>
                <Button
                  variant="text"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Email address
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">{user.email}</Box>
              <Box className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {user.isVerified ? "Verified" : "Not verified"}
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Phone Number
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">
                {user.phone ? user.phone : "Not available"}
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Date of Birth
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">
                {user.dateOfBirth
                  ? new Date(user.dateOfBirth).toLocaleDateString()
                  : "Not available"}
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Address
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">
                {user.streetAddress}, {user.city}, {user.state},{" "}
                {user.postalCode}, {user.country}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="mt-8 bg-white shadow rounded-lg p-6">
        <Box>
          <Typography variant="h4" className="font-semibold text-gray-900">
            Settings
          </Typography>
          <Typography variant="body2" className="mt-1 text-gray-500">
            This information will be used as default settings.
          </Typography>
        </Box>
        <Divider className="mt-4" />
        <Box className="mt-6 space-y-6">
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Language
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">English</Box>
              <Button
                variant="text"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Update
              </Button>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Date format
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">DD-MM-YYYY</Box>
              <Button
                variant="text"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Update
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Profile",
  description: "Muissa Consulting blogs page ",
  keywords: "blogs, Muissa Consulting",
};
