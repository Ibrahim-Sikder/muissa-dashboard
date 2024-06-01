import LandingPageProvider from "@/lib/LandingPageProvider";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <LandingPageProvider>{children}</LandingPageProvider>;
};

export default layout;
