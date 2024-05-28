"use client";
import { Route } from "@/constants/common.constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(Route.TABLE);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center mt-[88px]">
      <Image src="/Rectangle.png" width={243} height={320} alt="Logo image" />
      <h1 className="text-white font-semibold text-[40px] w-[340px] text-center mt-[7px]">
        Uploading your data..
      </h1>
      <Image
        className="absolute bottom-0 right-5"
        src="/Snake.png"
        width={130}
        height={130}
        alt="Snake image"
      />
      <Image
        className="absolute opacity-[10%] top-5 left-0 rotate-[90deg]"
        src="/Snake.png"
        width={150}
        height={150}
        alt="Snake image"
      />
      <Image
        className="absolute left-0 bottom-20 z-0"
        src="/Star.png"
        width={90}
        height={90}
        alt="Star image"
      />
    </div>
  );
};

export default Loading;
