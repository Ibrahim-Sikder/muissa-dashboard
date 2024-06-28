import { baseApi } from "./baseApi";

export const couponApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCoupon: build.mutation({
      query: (data) => ({
        url: "/coupons/create-coupon",
        method: "POST",
        data,
      }),
    }),
    getCoupon: build.query({
      query: ({ token }) => ({
        url: "/coupons/get-coupon",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useCreateCouponMutation, useGetCouponQuery } = couponApi;
