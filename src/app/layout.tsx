import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Toaster position="bottom-right" richColors />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  </Providers>
  );
}
