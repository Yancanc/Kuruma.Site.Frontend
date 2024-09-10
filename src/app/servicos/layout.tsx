'use client'
import ServicesLayout from "@/components/ServicesComponents/ServicesLayout";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <>
      {path.includes("acessorios") ? (
        children
      ) : (
        <ServicesLayout>{children}</ServicesLayout>
      )}
    </>
  );
}
