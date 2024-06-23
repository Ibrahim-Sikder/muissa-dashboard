import { baseApi } from "./baseApi";
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategory: builder.query({
      query: () => ({
        url: `/categories/get-category`,
        method: "get",
      }),
    }),
    getAllServices: builder.query({
      query: ({ page, limit }) => ({
        url: "/services/get-services",
        method: "GET",
        params: { page, limit },
      }),
      providesTags: ["service"],
    }),
    getSingleService: builder.query({
      query: ({ id }) => ({
        url: `/services/${id}`,
        method: "GET",
      }),
    }),
    getAllServicesForHome: builder.query({
      query: ({
        selectedCategory: category,
        selectedSubCategory: sub_category,
      }) => ({
        url: "/services/get-services/home",
        method: "GET",

        params: { category, sub_category },
      }),
    }),

    updateService: builder.mutation({
      query: ({ id, data }) => ({
        url: `/services/${id}`,
        method: "PUT",
        data,
      }),

      invalidatesTags: ["service"],
    }),

    deleteService: builder.mutation({
      query: (id) => {
        return {
          url: `/services/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetAllCategoryQuery,
  useGetAllServicesForHomeQuery,
  useGetSingleServiceQuery,
  useGetAllServicesQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
