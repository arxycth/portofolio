import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Navbar} from "@/components/navbar";
import { Boxes } from "@/components/ui/background-boxes";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Arxycth Portofolio",
//   description: "My personal portofolio",
//   icons: {
//     icon: "/favicon.ico"
//   }
// };

export const metadata: Metadata = {
  title: "Arxycth Portofolio",
  description: "My personal portofolio, thx for visit",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Arxycth Portofolio",
    description: "My personal portofolio, thx for visit",
    url: "https://www.arxy.my.id",
    siteName: "Arxycth",
    images: [
      {
        url: "https://www.arxy.my.id/og-image.jpg", // Pastikan file ini ada di folder /public
        width: 1200,
        height: 630,
        alt: "Preview Arxycth Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arxycth Portofolio",
    description: "Portofolio pribadi Arxycth.",
    images: ["https://www.arxy.my.id/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased scroll-smooth`}
      >
        <AOSInit />
        {children}
              <Navbar />
              
              <Boxes className="fixed right-0 left-0 h-190"/>
              <div className="fixed inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      </body>
    </html>
  );
}
