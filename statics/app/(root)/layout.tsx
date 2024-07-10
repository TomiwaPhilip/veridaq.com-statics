"use client";
import { useState } from "react";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import CookieNote from "@/components/shared/CookieNote";
import Nav from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Reusables";
import BottomBar from "@/components/shared/BottomBar";
// export const metadata: Metadata = {
//   manifest: "/manifest.json",
//   title: "Veridaq.com",
//   description: "The platform for automated reference checks for your HR needs.",
// };

const APP_NAME = "Veridaq.com";
const APP_DEFAULT_TITLE = "Veridaq.com";
const APP_TITLE_TEMPLATE = "Veridaq.com";
const APP_DESCRIPTION =
  "The platform for automated reference checks for your HR needs.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [feedback, setFeedback] = useState(false);
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <div className="flex flex-col items-end justify-end gap-5 fixed bottom-10 right-10">
          {feedback ? (
            <div className="flex flex-col gap-1">
              <textarea
                rows={4}
                cols={20}
                placeholder="write your feedback message here"
                className="p-1 rounded-xl"
              />
              <button className="w-full h-10 text-white bg-purple-500 rounded-full">
                submit
              </button>
            </div>
          ) : null}
          <div
            onClick={() => setFeedback((prev) => !prev)}
            className="w-14 h-14 text-4xl border border-purple-500 hover:border-white hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer rounded-full bg-purple-500 flex items-center justify-center"
          >
            💬
          </div>
        </div>
        <Footer />
        <BottomBar />
        <CookieNote />
      </body>
    </html>
  );
}
