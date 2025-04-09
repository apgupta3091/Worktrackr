// app/client-layout.tsx
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/sign-in" && pathname !== "/sign-up";

  return (
    <>
      {showNavbar && <Navbar />}
      <main className="container py-10">{children}</main>
    </>
  );
}
