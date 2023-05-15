import { baseApi } from "./baseAPi";

const todosApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["Todo"],
    }),
  }),
});

// exports hooks for functional component
export const {
  useGetTodosQuery,
  util: { getRunningQueriesThunk },
} = todosApi;

// exports hooks for ssr rendering

export const { getTodos } = todosApi.endpoints;
