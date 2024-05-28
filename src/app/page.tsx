"use client";
import { Route } from "@/constants/common.constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButton = () => {
    router.push(Route.LOADING);
  };

  return (
    <main className="flex flex-col h-screen items-center bg-primary_bg">
      <div className="absolute inset-0 z-0 opacity-[15%]">
        <Image
          style={{
            top: "-220px",
            left: "-40px",
            rotate: "15deg",
          }}
          src="/Rectangle.png"
          layout="fill"
          objectFit="contain"
          alt="bg image"
        />
      </div>

      <div className="z-10 relative">
        <h1 className="font-semibold text-[40px] pt-[45px] text-white">
          Upload your data
        </h1>
        <div
          className="flex flex-col items-center text-center rounded-[42px] bg-gradient_bg w-full h-full mt-[75px]"
          style={{
            backgroundImage:
              "linear-gradient(272.48deg, rgba(101, 98, 226, 0.15) 4.97%, rgba(255, 255, 255, 0) 104.25%)",
          }}
        >
          <h3 className="text-white max-w-[250px] font-medium text-20px mt-8">
            Drag and Drop your{" "}
            <span className="bg-designation rounded-[10px] px-1">
              data.json
            </span>{" "}
            or{" "}
            <span className="bg-designation rounded-[10px] px-1">
              myData.zip
            </span>{" "}
            file here
          </h3>

          <span
            className="flex justify-center items-center w-[300px] h-[229px] bg-upload_place_bg mt-7 rounded-[46px] shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(272.48deg, rgba(101, 98, 226, 0.15) 4.97%, rgba(255, 255, 255, 0) 104.25%)",
            }}
          >
            <Image
              src="/Vector.png"
              width={75}
              height={100}
              alt="drop down image"
            />
          </span>

          <button
            className="w-[300px] h-[71px] mt-6 rounded-[30px] bg-upload_button_bg text-white font-medium text-[18px]"
            style={{
              backgroundImage:
                "linear-gradient(262.32deg, #03FFD1 -15.05%, #706DFB 68.26%)",
            }}
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
