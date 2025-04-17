import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roobert = localFont({
  src: [
    {
      path: "../public/fonts/RoobertTRIAL-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/RoobertTRIAL-Regular.woff2",
      weight: "400",
      style: "normal",
    },

    {
      path: "../public/fonts/RoobertTRIAL-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Skinstric | Sophisticated Skincare",
  description:
    "Skinstric is a technologically sophisticated website that specializes in creating customized skincare products uing artifical intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roobert.className}>
      <body className={`antialiased index-page`}>
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
