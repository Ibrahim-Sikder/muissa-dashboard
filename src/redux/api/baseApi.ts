
import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

export const {} = baseApi;
