import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Sohail | Full-Stack & Cloud Engineer",
  description:
    "Engineering robust, scalable and secure digital applications across web, mobile, backend and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-[#FF6B00] selection:text-white">
        {children}
      </body>
    </html>
  );
}
