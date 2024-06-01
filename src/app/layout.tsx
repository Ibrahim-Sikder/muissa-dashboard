import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";


export const metadata: Metadata = {
  title: "Muissa",
  description: "Welcome to Muissa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
    <html lang="en">
      <body >
        <Toaster position="bottom-right" richColors />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  </Providers>
  );
}
