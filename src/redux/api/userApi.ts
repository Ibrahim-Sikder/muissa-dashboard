import { baseApi } from "./baseApi";


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getAllUser: build.query({
      query: () => ({
        url: "/users/get/all/user",
        method: "GET",
      }),
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

  }),

});

export const { useGetAllUserQuery, useDeleteUserMutation } = userApi;
