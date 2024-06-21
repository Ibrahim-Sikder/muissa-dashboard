import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
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

    }),
});

export const { useGetAllReviewsQuery, useGetSingleReviewQuery } = reviewApi;
