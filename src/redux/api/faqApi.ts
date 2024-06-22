import { baseApi } from "./baseApi";

export const faqApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllFaqs: build.query({
            query: () => ({
                url: "/faq/get-faq",
                method: "GET",
            }),
        }),

    }),
});

export const {useGetAllFaqsQuery} = faqApi;
