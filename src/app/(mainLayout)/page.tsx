"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "@/components/ui/Header";
import Navbar from "@/components/ui/Navbar/Navbar";
import Banner from "@/components/ui/HomePage/Banner";

const Home = () => {
  return (
    <Box>
      <Banner />
    </Box>
  );
};

export default Home;
