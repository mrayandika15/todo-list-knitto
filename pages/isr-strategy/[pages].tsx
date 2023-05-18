import { getRunningQueriesThunk, getSortTodos } from "@/services/todosApi";
import { wrapper } from "@/store";
import IsrStrategy from ".";
import { GetStaticPaths } from "next";

export default IsrStrategy;

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const page: number = Number(params?.pages) | 1;

      const result = await store.dispatch(getSortTodos.initiate(page));

      await Promise.all(store.dispatch(getRunningQueriesThunk()));

      return {
        props: {
          data: result?.data,
        },
        revalidate: 6,
      };
    }
);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Array.from({ length: 10 }).map((_, i) => `/isr-strategy/${i + 2}`),
    fallback: "blocking",
  };
};
