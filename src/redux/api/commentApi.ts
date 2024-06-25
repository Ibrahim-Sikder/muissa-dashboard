import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createComment: build.mutation({
      query: ({ token, data, id }) => ({
        url: `/comments/create-comment?id=${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {data},
      }),
    }),
  }),
});

export const { useCreateCommentMutation } = commentApi;
