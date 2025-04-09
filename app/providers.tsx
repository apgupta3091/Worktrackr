"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

function Providers({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // prevents mismatch by skipping render on server
  }

  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default Providers;
