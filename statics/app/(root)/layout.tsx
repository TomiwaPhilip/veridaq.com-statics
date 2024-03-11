import "./globals.css"
import type { Metadata, Viewport } from "next";

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
const APP_DESCRIPTION = "The platform for automated reference checks for your HR needs.";

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
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
