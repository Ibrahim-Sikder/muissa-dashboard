import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/ui/Navbar/index";
import LandingPageProvider from "@/lib/LandingPageProvider";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <LandingPageProvider>
      <Navbar />
      {children}
      <Footer />
    </LandingPageProvider>
  );
};

export default layout;
