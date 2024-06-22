import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

// export const baseApi: any = createApi({
//   reducerPath: "baseApi",
//   baseQuery: axiosBaseQuery({
//     baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
//   }),
//   tagTypes: tagTypesList,
//   endpoints: (builder) => ({
//     getAllMembers: builder.query({
//       query: ({ token, page, limit, filterType }) => ({
//         url: "/members/get-all-member",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: { page, limit, filterType },
//       }),
//     }),
//     getSingleMember: builder.query({
//       query: ({ token, id }) => ({
//         url: `/members/${id}`,
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }),
//     }),
//     getAllCategory: builder.query({
//       query: () => ({
//         url: `/categories/get-category`,
//         method: "get",
//       }),
//     }),
//     getAllServices: builder.query({
//       query: ({ page, limit }) => ({
//         url: "/services/get-services",
//         method: "GET",
//         params: { page, limit },
//       }),
//     }),
//     getSingleService: builder.query({
//       query: ({ id }) => ({
//         url: `/services/${id}`,
//         method: "GET",
//       }),
//     }),
//     getAllServicesForHome: builder.query({
//       query: ({
//         selectedCategory: category,
//         selectedSubCategory: sub_category,
//       }) => ({
//         url: "/services/get-services/home",
//         method: "GET",

//         params: { category, sub_category },
//       }),
//     }),
//     getAllBlogs: builder.query({
//       query: ({ page, limit }) => ({
//         url: "/blogs/get-blogs",
//         method: "GET",

//         params: { page, limit },
//       }),
//     }),
//     getSingleBlog: builder.query({
//       query: ({ id }) => ({
//         url: `/blogs/${id}`,
//         method: "GET",
//       }),
//     }),
//     getAllReviews: builder.query({
//       query: ({ page, limit }) => ({
//         url: "/reviews/get-reviews",
//         method: "GET",

//         params: { page, limit },
//       }),
//     }),
//     getSingleReview: builder.query({
//       query: ({ id }) => ({
//         url: `/reviews/${id}`,
//         method: "GET",
//       }),
//     }),
//     getAllPayments: builder.query({
//       query: ({ token, page, limit, filterType }) => ({
//         url: "/payments/get-all-payment",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         params: { page, limit, filterType },
//       }),
//     }),
//     getSinglePayment: builder.query({
//       query: ({ id }) => ({
//         url: `/payments/${id}`,
//         method: "GET",
//       }),
//     }),
//     getAllFaqs: builder.query({
//       query: () => ({
//         url: "/faq/get-faq",
//         method: "GET",
//       }),
//     }),
//   }),
// });
// export const {
//   useGetAllMembersQuery,
//   useGetSingleMemberQuery,
//   useGetAllCategoryQuery,
//   useGetAllServicesQuery,

//   useGetSingleServiceQuery,
//   useGetSingleReviewQuery,
//   useGetSingleBlogQuery,
//   useGetAllServicesForHomeQuery,
//   useGetAllBlogsQuery,
//   useGetAllReviewsQuery,

//   useGetAllPaymentsQuery,
//   useGetSinglePaymentQuery,
//   useGetAllFaqsQuery,
// } = baseApi;
// export const {} = baseApi;
