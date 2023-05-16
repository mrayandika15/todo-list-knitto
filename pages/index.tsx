import Image from "next/image";
import { Inter } from "next/font/google";
import { wrapper } from "@/store";
import { getAllTodos, getRunningQueriesThunk } from "@/services/todosApi";
import { ITodo } from "@/types";

const inter = Inter({ subsets: ["latin"] });

type IProps = {
  data: ITodo[];
};

export default function Home({ data }: IProps) {
  console.log(data);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    ></main>
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
