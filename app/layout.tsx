import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: 'swap',
  fallback: ['sans-serif', 'system-ui']
});


export const metadata: Metadata = {
  title: "Skinstric | Sophisticated Skincare",
  description: "Skinstric is a technologically sophisticated website that specializes in creating customized skincare products uing artifical intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={workSans.className}>
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
