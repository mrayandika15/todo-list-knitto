import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { todoApi } from "./services/todosApi";

export const store = () => configureStore({
    reducer : {
        [todoApi.reducerPath] : todoApi.reducer
    },
    middleware : (getDefaultMiddleware) =>  
        getDefaultMiddleware().concat(todoApi.middleware)
    
})


export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(store, {debug : true})

