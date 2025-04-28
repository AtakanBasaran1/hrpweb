import "./globals.css";

import { poppins } from "@/app/ui/fonts";

import { ProductProvider } from "@/context/ProductContext";

import ClientLayoutWrapper from "./ClientLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RegeditPos",
  description: "RegeditPos HomePage",
  icons: "/regedit_logo.ico",  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased bg-black text-white`}>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
    </ProductProvider>
  );
}