'use client'
import { Header } from "@/components";
import { Contact } from "@/components/LayoutComponents/Contact";
import { LayoutFooter } from "@/components/LayoutComponents/Footer";
import { Accordion } from "@/components/LayoutComponents/Accordion";
import "./globals.css";
import { usePathname } from "next/navigation";
import ChatBot from "@/components/LayoutComponents/ChatBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      {path.includes("cms") ? (
        <body>
       {children}
        </body>
      ) : (
        <body>
          {" "}
          <Header />
          {children}
          <Contact />
          <LayoutFooter />
          <Accordion />
          <ChatBot/>
        </body>
      )}
    </html>
  );
}
