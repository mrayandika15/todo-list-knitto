import Image from "next/image";
import { Inter } from "next/font/google";
import { wrapper } from "@/store";
import { getRunningQueriesThunk, getSortTodos } from "@/services/todosApi";
import { ITodo } from "@/types";
import { Divider, Header } from "@/components";
import { CreateTodos, ListTodos } from "@/features";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type IProps = {
  data: ITodo[];
  currentPage: number;
};

export default function Home({ data }: IProps) {
  return (
    <main className={`flex flex-col p-16 gap-3 ${inter.className}`}>
      <Header />
      <CreateTodos />
      <Divider />

      <ListTodos data={data} fetchStrategy="ssr" />
    </main>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const page: number = Number(query?.page) | 1;

      const result = await store.dispatch(getSortTodos.initiate(page));

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {
          data: result?.data,
        },
      };
    }
);
