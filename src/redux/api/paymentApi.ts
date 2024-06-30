import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPayments: build.query({
      query: ({ token, page, limit, filterType }) => ({
        url: "/payments/get-all-payment",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit, filterType },
      }),
    }),
    getSinglePayment: build.query({
      query: ({ id, token }) => ({
        url: `/payments/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getDiscountForPayment: build.query({
      query: () => ({
        url: `/discounts/get-discount`,
        method: "GET",
      }),
    }),
    getAllCouponForPayment: build.query({
      query: () => ({
        url: `/coupons/get-coupon`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllPaymentsQuery,
  useGetSinglePaymentQuery,
  useGetDiscountForPaymentQuery,
  useGetAllCouponForPaymentQuery,
} = paymentApi;
