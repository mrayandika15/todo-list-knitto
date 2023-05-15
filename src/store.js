import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./services/baseAPi";
import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
  });

export const wrapper = createWrapper(store, { debug: true });
