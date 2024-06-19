import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
//   endpoints: () => ({}),
//   tagTypes: tagTypesList,
// });

export const baseApi: any = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
  }),
  tagTypes: tagTypesList,
  endpoints: (builder) => ({
    getAllMembers: builder.query({
      query: ({ token, page, limit, filterType }) => ({
        url: "/members/get-all-member",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit, filterType },
      }),
    }),
    getSingleMember: builder.query({
      query: ({ token, id }) => ({
        url: `/members/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getAllCategory: builder.query({
      query: () => ({
        url: `/categories/get-category`,
        method: "get",
      }),
    }),
    getAllServices: builder.query({
      query: ({
        token,
        page,
        limit,
        selectedCategory: category,
        selectedSubCategory: sub_category,
      }) => ({
        url: "/services/get-services",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { page, limit, category, sub_category },
      }),
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
        url: "/services/get-services-for-home",
        method: "GET",

        params: { category, sub_category },
      }),
    }),
  }),
});
export const {
  useGetAllMembersQuery,
  useGetSingleMemberQuery,
  useGetAllCategoryQuery,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useGetAllServicesForHomeQuery,
} = baseApi;
export const {} = baseApi;
