import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const staggeredFetchQuery = retry(
  fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  { maxRetries: 6 }
);

export const baseApi = createApi({
  baseQuery: staggeredFetchQuery,
  reducerPath: "baseApi",
  tagTypes: ["Todo"],
  endpoints: () => ({}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});
