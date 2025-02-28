import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import Header from "@/components/header";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YouMusic - Tú música al instante",
  description: "Disfruta de la mejor música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
