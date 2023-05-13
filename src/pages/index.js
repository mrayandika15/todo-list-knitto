import Image from "next/image";
import { Inter } from "next/font/google";
import { Divider, Header } from "@/components";
import { ActionButtons } from "@/containers";

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
