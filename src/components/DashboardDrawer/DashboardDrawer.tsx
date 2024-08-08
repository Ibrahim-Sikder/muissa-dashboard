"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Badge,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
// import user from "../../../../src/assets/images/user.jpg";

import { ArrowDownward, NotificationsNone } from "@mui/icons-material";
import "./DashboardDrawer.css";
import SideBar from "../Dashboard/SideBar/SideBar";
import { UserPopover } from "../Dashboard/layout/UserPropover";
import MainNav from "../Dashboard/layout/MainNav";
const settings = ["Profile", "Settings", "Hotel", "Content", "Log Out"];

const drawerWidth = 240;

export default function DashboardDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [hover, setHover] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    setHover(true);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setHover(false);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setHover(true);
    setAnchorElUser(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box sx={{ display: "flex", background: '#F2F4F8', }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <MainNav />
        <Box paddingTop='20px'>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
