import { tagTypes } from "../tag-types";
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
            query: ({ id }) => ({
                url: `/payments/${id}`,
                method: "GET",
            }),
        }),
        getAllFaqs: build.query({
            query: () => ({
                url: "/faq/get-faq",
                method: "GET",
            }),
        }),

    }),
});

export const {

} = paymentApi;
