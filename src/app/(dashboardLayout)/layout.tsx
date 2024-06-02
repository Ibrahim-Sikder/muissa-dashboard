import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { MainNav } from "@/components/Dashboard/layout/MainNav";
import { SideNav } from "@/components/Dashboard/layout/SideNav";
import { Box, Container, GlobalStyles } from "@mui/material";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            "--MainNav-height": "56px",
            "--MainNav-zIndex": 1000,
            "--SideNav-width": "280px",
            "--SideNav-zIndex": 1100,
            "--MobileNav-width": "320px",
            "--MobileNav-zIndex": 1100,
          },
        }}
      />
      <Box
        sx={{
          bgcolor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          minHeight: "100%",
        }}
      >
        <SideNav />
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            pl: { lg: "var(--SideNav-width)" },
          }}
        >
          <MainNav />
          <main>
            <Container maxWidth="xl" sx={{ py: "64px" }}>
              {children}
            </Container>
          </main>
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
