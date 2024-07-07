"use client";

import { useGetSinglePaymentQuery } from "@/redux/api/paymentApi";
import { useParams } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CircularProgress,
  Box,
  Divider,
  Button,
} from "@mui/material";
import dayjs from "dayjs";
import Loader from "@/components/Loader";
import Link from "next/link";
import { getCookie } from "@/helpers/Cookies";

const ShowPayment = () => {
  const { id } = useParams();
  const token = getCookie("mui-token")
  const { data: paymentData, isLoading } = useGetSinglePaymentQuery({id, token});

  if (isLoading) {
    return <Loader />;
  }

  if (!paymentData) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h6">Payment data not found.</Typography>
      </Box>
    );
  }

  const InfoItem = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => (
    <div className="flex justify-between py-2">
      <Typography variant="body1" className="font-bold">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </div>
  );

  return (
    <Box className="p-4 flex justify-center items-center bg-white">
      <Card
        className="w-full max-w-4xl"
        sx={{
          boxShadow: "none",
          border: "1px solid #e0e0e0",
        }}
      >
        <CardHeader
          title="Payment Details"
          className="bg-gray-800 text-white "
          action={
            <Link href="/dashboard/super_admin/payments">
              <Button variant="contained" color="info">
                Back
              </Button>
            </Link>
          }
        />
        <CardContent className="p-6">
          <div className="mb-6">
            <Typography variant="h6" className="text-gray-700">
              General Information
            </Typography>
            <Divider className="my-4" />
            <div>
              <InfoItem
                label="Account Number:"
                value={paymentData.account_number}
              />
              <Divider className="my-2" />
              <InfoItem label="Amount:" value={`$${paymentData.amount}`} />
              <Divider className="my-2" />
              <InfoItem
                label="Payment Method:"
                value={paymentData.payment_method}
              />
              <Divider className="my-2" />
              <InfoItem
                label="Payment Status:"
                value={paymentData.payment_status}
              />
              <Divider className="my-2" />
              <InfoItem
                label="Subscription For:"
                value={paymentData.subscription_for}
              />
              <Divider className="my-2" />
              <InfoItem
                label="Transaction ID:"
                value={paymentData.transaction_id}
              />
              <Divider className="my-2" />
              <InfoItem
                label="Created At:"
                value={dayjs(paymentData.createdAt).format(
                  "MMMM DD, YYYY HH:mm:ss"
                )}
              />
              <Divider className="my-2" />
              <InfoItem
                label="Updated At:"
                value={dayjs(paymentData.updatedAt).format(
                  "MMMM DD, YYYY HH:mm:ss"
                )}
              />
            </div>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="text-gray-700">
              Member Information
            </Typography>
            <Divider className="my-4" />
            <div>
              <InfoItem label="Member ID:" value={paymentData.member} />
              <Divider className="my-2" />
              <InfoItem label="Member Type:" value={paymentData.member_type} />
            </div>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="text-gray-700">
              Target Account Information
            </Typography>
            <Divider className="my-4" />
            <div>
              <InfoItem
                label="Target Account:"
                value={paymentData.target_account}
              />
            </div>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="text-gray-700">
              User Information
            </Typography>
            <Divider className="my-4" />
            <div>
              <InfoItem label="User Email:" value={paymentData.user.email} />
              <Divider className="my-2" />
              <InfoItem label="User Name:" value={paymentData.user.name} />
              <Divider className="my-2" />
              <InfoItem label="User Role:" value={paymentData.user.role} />
              <Divider className="my-2" />
              <InfoItem label="User Status:" value={paymentData.user.status} />
              <Divider className="my-2" />
              <InfoItem
                label="User Created At:"
                value={dayjs(paymentData.user.createdAt).format(
                  "MMMM DD, YYYY HH:mm:ss"
                )}
              />
              <Divider className="my-2" />
              <InfoItem
                label="User Updated At:"
                value={dayjs(paymentData.user.updatedAt).format(
                  "MMMM DD, YYYY HH:mm:ss"
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ShowPayment;
