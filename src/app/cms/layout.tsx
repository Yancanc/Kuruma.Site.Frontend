"use client";
import { usePathname } from "next/navigation";
import "../globals.css";
import HeaderCMS from "@/components/CMSComponents/HeaderCMS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <>
      {path.includes("login") ? (
        children
      ) : (
        <>
        <div className="min-h-screen max-w-screen overflow-x-hidden bg-neutral-100">
          <HeaderCMS activePath={path} />
          {children}
        </div>
        </>
      )}
    </>
  );
}
