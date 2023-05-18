import { ITodo } from "@/types";
import { baseApi } from "./baseApi";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTodos: builder.query<ITodo[], void>({
      query: () => "todos",
    }),

    getSortTodos: builder.query<ITodo[], void | number>({
      query: (pages) => `todos?_start=${pages}&_limit=10`,
      providesTags: ["Todos"],
    }),

    createTodos: builder.mutation<ITodo, Partial<ITodo>>({
      query: ({ ...body }) => ({
        url: `todos`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

// export for CSR integration
export const {
  useGetAllTodosQuery,
  useGetSortTodosQuery,
  useCreateTodosMutation,
  util: { getRunningQueriesThunk },
} = todoApi;

// export for ISR integration
export const { getAllTodos, getSortTodos } = todoApi.endpoints;
