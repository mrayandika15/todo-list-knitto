import { ITodo } from "@/types"
import { baseApi } from "./baseApi"

export const todoApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
      getAllTodos :  builder.query<ITodo[] , void>({
        query : () => "todos"
      })
    })
})


// export for CSR integration
export const {useGetAllTodosQuery , util : {getRunningQueriesThunk}} = todoApi


// export for ISR integration

export const {getAllTodos} = todoApi.endpoints