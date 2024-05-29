"use client";
import { Route } from "@/constants/common.constants";
import { useData } from "./providers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

function Home() {
  const { data, handleUpdateData } = useData();

  const router = useRouter();

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      handleUpdateData(data);
    };

    reader.readAsText(file);
  };

  const handleButton = () => {
    router.push(Route.LOADING);
  };

  return (
    <main className="flex flex-col h-[70vh] items-center">
      <div className="absolute inset-0">
        <Image
          src="/Home-bg.png"
          alt="home bg"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <Image
        className="opacity-10 rotate-[15%]"
        style={{
          top: "-220px",
          left: "-40px",
        }}
        src="/Rectangle.png"
        layout="fill"
        objectFit="contain"
        alt="bg image"
      />

      <div className="z-10 relative">
        <h1 className="font-semibold text-[40px] pt-[45px] text-white">
          Upload your data
        </h1>
        <div className="flex flex-col items-center text-center rounded-[42px] bg-gradient_bg w-full h-[80%] mt-[110px]">
          <h3 className="text-white max-w-[250px] font-medium text-20px mt-8">
            Drag and Drop your{" "}
            <span className="bg-custom_blue rounded-xl px-1">data.json</span> or{" "}
            <span className="bg-custom_blue rounded-xl px-1">myData.zip</span>{" "}
            file here
          </h3>
          <label
            className="flex justify-center items-center max-w-[300px] w-full h-[229px] bg-upload_place_bg mt-7 rounded-[46px] shadow-2xl cursor-pointer"
            htmlFor="file-input"
          >
            <Image
              src="/Vector.png"
              width={75}
              height={100}
              alt="drop down image"
            />
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          <button
            className="w-[300px] h-[71px] mt-6 rounded-[30px] bg-gradient-to-r from-[#03FFD1] to-[#706DFB] text-white font-medium text-[18px]"
            onClick={handleButton}
          >
            Upload myData.json
          </button>

          <button className="text-white font-medium mt-5">
            I don’t have it
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
