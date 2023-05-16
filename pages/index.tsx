import Image from "next/image";
import { Inter } from "next/font/google";
import { wrapper } from "@/store";
import { getAllTodos, getRunningQueriesThunk } from "@/services/todosApi";
import { ITodo } from "@/types";
import { Divider, Header } from "@/components";
import { CreateTodos } from "@/features";

const inter = Inter({ subsets: ["latin"] });

type IProps = {
  data: ITodo[];
};

export default function Home({ data }: IProps) {
  return (
    <main className={`flex flex-col p-16 gap-3 ${inter.className}`}>
      <Header />
      <CreateTodos />
      <Divider />
    </main>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const result = await store.dispatch(getAllTodos.initiate());
  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  return {
    props: {
      data: result?.data,
    },
    revalidate: 10,
  };
});
