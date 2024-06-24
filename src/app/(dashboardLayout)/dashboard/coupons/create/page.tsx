import CreateCoupon from "@/components/Dashboard/pages/coupons/CreateCoupon";
import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// const CreateCoupon = dynamic(
//   () => import("@/components/Dashboard/pages/coupons/CreateCoupon"),
//   {
//     ssr: false,
//   }
// );

export default function CreateCouponPage() {
  return (
    <Stack spacing={3}>
      <div>
        <Typography variant="h4">Create a new coupon</Typography>
      </div>
      <CreateCoupon />
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Muissa Consulting | Coupons",
  description: "Muissa Consulting coupons page",
  keywords: "coupons, Muissa Consulting",
};
