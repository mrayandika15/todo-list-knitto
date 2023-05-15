import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider, Header } from "@/components";
import { ActionButtons } from "@/containers";
import { wrapper } from "@/store";
import { getRunningQueriesThunk, getTodos } from "@/services/todosApi";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} flex flex-col gap-3 p-10`}>
      <Header />
      <ActionButtons />
      <Divider />
    </main>
  );
}

// SEARCH FOR HOW TO GET DATA FROM GET SERVER SIDE PROPS & REVALIDATE WITH ISR

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(getTodos.initiate(""));
    await Promise.all(store.dispatch(getRunningQueriesThunk()));

    return {
      props: {},
    };
  }
);
