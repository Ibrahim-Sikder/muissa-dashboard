import { baseApi } from "./baseApi";


export const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createComment: build.mutation({
        query: ({ data, id }) => ({
          url: `/comments/create-comment?id=${id}`,
          method: 'POST',
          body: data,
        }),
      }),
   
  }),
});

export const {useCreateCommentMutation } = commentApi;
