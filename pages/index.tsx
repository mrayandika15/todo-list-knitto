import { Button } from "@/components";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

import React from "react";

import { MdOutlineShowChart } from "react-icons/md";

import { TbServer } from "react-icons/tb";
import { TfiServer } from "react-icons/tfi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <main
      className={`flex w-full h-screen justify-center items-center ${inter.className}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex w-full justify-center gap-3">
          <div className="text-3xl font-semibold">
            Select Rendering Strategy{" "}
          </div>
          <MdOutlineShowChart className="text-4xl" />
        </div>

        <div className="flex gap-5">
          <Button
            variant="colored"
            onClick={() => router.push("/isr-strategy")}
          >
            ISR Strategy <TbServer className="text-lg" />
          </Button>
          <Button
            variant="colored"
            onClick={() => router.push("/ssr-strategy")}
          >
            SSR Strategy <TfiServer className="text-lg" />
          </Button>
        </div>
      </div>
    </main>
  );
}
