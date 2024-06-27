"use client"
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import EditIcon from "@mui/icons-material/Edit";
import { Typography } from "@mui/material";
import type { Metadata } from "next";
import Loader from "@/components/Loader";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getCookie } from "@/helpers/Cookies";
import Link from "next/link";
import { usePathname } from "next/navigation";


const isEmailValid = (auth: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(auth);
};

const isPhoneValid = (auth: string): boolean => {
  const phoneRegex = /^\d{10,11}$/;
  return phoneRegex.test(auth);
};
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

  
  const token = getCookie("mui-token");
  const pathName = usePathname();

  const { data, error, isLoading, refetch } = useGetSingleUserQuery({ token });


  let email;
  let phone;

  if (data) {
    email = isEmailValid(data.auth) ? data.auth : data.email;
    phone = isPhoneValid(data.auth) ? data.auth : data.phone;
  }


  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="text-center">Data not found </h1>;
  }


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
                  src={data?.profile_pic}
                  alt={`${data?.name}`}
                  className="mr-4"
                />
                {data?.name} 
              </Box>
              <Box>
                <Link href={"/dashboard/settings"}>
                
                <Button
                  variant="text"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Email address
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">{email}</Box>
              <Box className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {data?.isVerified  ? "Verified" : "Not verified"}
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
                {phone ? phone : "Not available"}
              </Box>
            </Box>
          </Box>
          <Divider />
          {/* <Box className="pt-6 sm:flex">
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
          </Box> */}
          <Divider />
          <Box className="pt-6 sm:flex">
            <Typography className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">
              Address
            </Typography>
            <Box className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
              <Box className="text-gray-900">
                {data?.street_address}, {data?.city}, {data?.state},{" "}
                {data?.postal_code}, {data?.country}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <Box className="mt-8 bg-white shadow rounded-lg p-6">
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
      </Box> */}
    </>
  );
}

// export const metadata: Metadata = {
//   title: "Muissa Consulting | Profile",
//   description: "Muissa Consulting blogs page ",
//   keywords: "blogs, Muissa Consulting",
// };
