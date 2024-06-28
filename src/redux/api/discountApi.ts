import { baseApi } from "./baseApi";

export const discountApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDiscount: build.query({
      query: ({ token }) => ({
        url: "/discounts/get/allDiscount",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetDiscountQuery } = discountApi;
