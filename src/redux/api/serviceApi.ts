import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const serviceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCategory: build.query({
            query: () => ({
                url: `/categories/get-category`,
                method: "get",
            }),
        }),
        getAllServices: build.query({
            query: ({ page, limit }) => ({
                url: "/services/get-services",
                method: "GET",
                params: { page, limit },
            }),
        }),
        getSingleService: build.query({
            query: ({ id }) => ({
                url: `/services/${id}`,
                method: "GET",
            }),
        }),
        getAllServicesForHome: build.query({
            query: ({
                selectedCategory: category,
                selectedSubCategory: sub_category,
            }) => ({
                url: "/services/get-services/home",
                method: "GET",

                params: { category, sub_category },
            }),
        }),
        getAllBlogs: build.query({
            query: ({ page, limit }) => ({
                url: "/blogs/get-blogs",
                method: "GET",

                params: { page, limit },
            }),
        }),
        getSingleBlog: build.query({
            query: ({ id }) => ({
                url: `/blogs/${id}`,
                method: "GET",
            }),
        }),
        getAllReviews: build.query({
            query: ({ page, limit }) => ({
                url: "/reviews/get-reviews",
                method: "GET",

                params: { page, limit },
            }),
        }),
        getSingleReview: build.query({
            query: ({ id }) => ({
                url: `/reviews/${id}`,
                method: "GET",
            }),
        }),
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

} = serviceApi;
