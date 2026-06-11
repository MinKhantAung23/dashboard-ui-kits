import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DashboardShell } from "@/components/layout/DashboardShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Kit - Vanilla Next.js",
  description: "A clean, modern and simple dashboard starter kit built with pure Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-white transition-colors duration-300`}>
        <DashboardShell>
          {children}
        </DashboardShell>
      </body>
    </html>
  );
}
