import { baseApi } from "./baseApi";


export const clientApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createClient: build.mutation({
      query: (data) => ({
        url: "/clients/create-client",
        method: "POST",
        data,
      }),
      invalidatesTags:['client']
    }),
    getAllClient: build.query({
      query: () => ({
        url: "/clients",
        method: "GET",
      }),
      providesTags:['client']
    }),
    deleteClient: build.mutation({
      query: ({id, token}) => ({
        url: `/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["client"],
    }),
  }),
});

export const { useCreateClientMutation, useGetAllClientQuery, useDeleteClientMutation } = clientApi;
