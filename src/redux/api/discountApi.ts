import { baseApi } from "./baseApi";


export const discountApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDiscount: build.query({
            query: () => ({
                url: "/discounts/get/allDiscount",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetDiscountQuery } = discountApi;
