"use client";

import type { ReactNode } from "react";

import { RouterGate } from "@/shared/router";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <RouterGate />
      {children}
    </ThemeProvider>
  );
}
