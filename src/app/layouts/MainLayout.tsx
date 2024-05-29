"use client";

import DataProvider from "../providers";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DataProvider>{children}</DataProvider>;
}
