import { baseApi } from "./baseApi";


export const clientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClient: build.mutation({
      query: (data) => ({
        url: "/clients/create-client",
        method: "POST",
        data,
      }),
    }),
    getAllClient: build.query({
      query: () => ({
        url: "/clients",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateClientMutation, useGetAllClientQuery } = clientApi;
