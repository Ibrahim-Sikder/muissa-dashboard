'use client'

import { Box, List, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { userRole, UserRole } from "@/types/common";
import SideBarItems from "./SideBarItems";
import { getUserInfo } from "@/services/action";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();

      setUserRole(userInfo?.role || null);
    };

    fetchUserInfo();
  }, []);
  

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      height="100vh"
      paddingBottom="30px"
      sx={{ background: '#121621', color: '#fff' }}
    >

      <Box>
        <Stack
          sx={{ py: 1, mt: 1 }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
          component={Link}
          href="/"
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            sx={{ cursor: "pointer", color: '#fff' }}
          >
            Muissa Dashboard
          </Typography>
        </Stack>
        <List>
          {drawerItems(userRole as userRole).map((item, index) => (
            <SideBarItems key={index} item={item} index={index} />
          ))}
        </List>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default SideBar;
