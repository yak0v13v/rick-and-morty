import type { Metadata } from "next";

import { Providers } from "./providers";
import { EffectorNext } from "@effector/next";
import { Inter } from "next/font/google";

import "@repa/uilib/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Small Next.JS App",
  title: "Rick and Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <EffectorNext>
          <Providers>{children}</Providers>
        </EffectorNext>
      </body>
    </html>
  );
}
