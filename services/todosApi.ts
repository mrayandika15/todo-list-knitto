import { ITodo } from "@/types";
import { baseApi } from "./baseApi";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodo[], void>({
      query: () => "todos",
    }),

    getSortTodos: builder.query<ITodo[], void>({
      query: (pages) => `todos?_start=${pages}&_limit=10`,
    }),
  }),
});

// export for CSR integration
export const {
  useGetAllTodosQuery,
  useGetSortTodosQuery,
  util: { getRunningQueriesThunk },
} = todoApi;

// export for ISR integration
export const { getAllTodos, getSortTodos } = todoApi.endpoints;
