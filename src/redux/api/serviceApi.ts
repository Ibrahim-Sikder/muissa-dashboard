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
    }),
});

export const { useGetAllCategoryQuery, useGetAllServicesForHomeQuery, useGetSingleServiceQuery, useGetAllServicesQuery } = serviceApi;
