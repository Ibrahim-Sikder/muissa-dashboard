import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import React, { ReactNode } from "react";
import ProfileSidebar from "./_components/ProfielSidebar/ProfileSidebar";
import Container from "@/components/ui/HomePage/Container/Container";
import { Suspense } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <Header />
      <Container>
        <div className="flex lg:flex-row flex-col  gap-10 w-full  mt-10 ">
          <div>
            <ProfileSidebar />
          </div>
          <div>{children}</div>
        </div>
      </Container>
      <Footer />
    </Suspense>
  );
};

export default layout;
