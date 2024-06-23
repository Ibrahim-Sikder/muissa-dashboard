import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllReviews: build.query({
      query: ({ page, limit }) => ({
        url: "/reviews/get-reviews",
        method: "GET",

        params: { page, limit },
      }),
      providesTags: ["reviews"],
    }),
    getSingleReview: build.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetSingleReviewQuery,
  useDeleteReviewMutation,
} = reviewApi;
