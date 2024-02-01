import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "@repa/uilib/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Rick and Morty",
  title: "Small Next.JS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
