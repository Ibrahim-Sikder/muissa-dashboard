import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Toaster } from "sonner";
import MessageIcon from "@/components/Message/MessageIcon";
import dynamic from "next/dynamic";
import MessageIcons from "@/components/Message/MessageIcons";
import SubscriptionAlert from "@/components/Preloader/SubscriptionAlert";

const BackTopButton = dynamic(
  () => import("@/components/BackTopButton/BackTopButton"),
  {
    ssr: false,
  }
);

const hindiSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muissa Consulting | Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll="0">
      <Providers>
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={hindiSiliguri.className}>
          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>
       
    </html>
  );
}
