import type { Metadata } from "next";
import "./globals.css"

import Nav from "@/components/shared/Nav";

export const metadata: Metadata = {
  title: "Veridaq.com",
  description: "The platform for automated reference checks for your HR needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
