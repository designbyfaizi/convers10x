import type { Metadata } from "next";
import "./globals.css";
import BgCursor from "@/components/BgCursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { readex } from "./fonts";

export const metadata: Metadata = {
  title: "Conversion 10X",
  description: "Maximize your conversion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={readex.className}>
        <BgCursor>
          <div className="flex flex-col min-h-dvh">
            <Header />
            {children}
            <div className="space h-40"></div>
            <Footer className="" />
          </div>
        </BgCursor>
      </body>
    </html>
  );
}
