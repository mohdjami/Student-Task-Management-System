"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import TokenProvider from "@/lib/TokenProvider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {" "}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
