"use client";

import { useGetSinglePaymentQuery } from "@/redux/api/paymentApi";
import { useParams } from "next/navigation";
import React from "react";

const ShowPayment = () => {
  const { id } = useParams();

  const { data: paymentData, isLoading } = useGetSinglePaymentQuery(id);
  console.log(paymentData);
  return <div>page</div>;
};

export default ShowPayment;
