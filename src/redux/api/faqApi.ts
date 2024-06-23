import { baseApi } from "./baseApi";

export const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllFaqs: build.query({
      query: () => ({
        url: "/faq/get-faq",
        method: "GET",
      }),
      providesTags: ["faq"],
    }),

    deleteFaq: build.mutation({
      query: (id: string) => ({
        url: `/faq/delete-faq/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["faq"],
    }),
  }),
});

export const { useGetAllFaqsQuery, useDeleteFaqMutation } = faqApi;
