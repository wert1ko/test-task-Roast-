import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary_bg ${inter.className}`}>
        <div className="flex items-center flex-col justify-center pt-[80px]">
          <Image
            src="/Logo.png"
            width={125}
            height={31}
            alt="company logo"
            className="z-5"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
