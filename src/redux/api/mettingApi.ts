import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllConsultancyMetting: build.query({
      query: ({ page, limit }) => ({
        url: "/metting/consultancy-book",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["metting"],
    }),
    getAllBookMetting: build.query({
      query: ({ page, limit }) => ({
        url: "/metting",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["metting"],
    }),
    getSingleConsultancyMetting: build.query({
      query: (id) => ({
        url: `/metting/consultancy-book/${id}`,
        method: "GET",
      }),
    }),
    deletConsultancyMetting: build.mutation({
      query: ({ id, token }) => ({
        url: `/metting/consultancy-book/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["metting"],
    }),
    deleteBookMetting: build.mutation({
      query: ({ id, token }) => ({
        url: `/metting/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["metting"],
    }),
    updateConsultancyMetting: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/metting/consultancy-book/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["metting"],
    }),
    updateBookMetting: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/metting/${id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["metting"],
    }),
  }),
});

export const {
  useGetAllConsultancyMettingQuery,
  useDeletConsultancyMettingMutation,
  useGetSingleConsultancyMettingQuery,
  useUpdateConsultancyMettingMutation,
  useGetAllBookMettingQuery,
  useUpdateBookMettingMutation,
  useDeleteBookMettingMutation,
} = reviewApi;
