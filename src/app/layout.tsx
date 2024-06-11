import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali, Tiro_Bangla } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["bengali"] });

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
        <body className={notoSansBengali.className}>
          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>
      {/* <BackTopButton /> */}
      {/* <MessageIcon /> */}
      <SubscriptionAlert />
      <MessageIcons />
    </html>
  );
}
