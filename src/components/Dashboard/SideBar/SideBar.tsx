import { Box, List, Stack, Typography } from "@mui/material";
import Link from "next/link";

import { userRole } from "@/types/common";
import SideBarItems from "./SideBarItems";
import { drawerItems } from "@/utils/drawerItems";

const SideBar = () => {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      height="100vh"
      paddingBottom="30px"
    >
      <Box>
        <Stack
          sx={{
            py: 1,
            mt: 1,
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
          component={Link}
          href="/"
        >
          {/* <Image src={assets.svgs.logo} width={40} height={40} alt="logo" /> */}
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            sx={{ color: "primary.main", cursor: "pointer" }}
          >
           Muissa
          </Typography>
        </Stack>
        <List>
          {drawerItems("super_admin" as userRole).map((item, index) => (
            <SideBarItems key={index} item={item} index={index} />
          ))}
        </List>
      </Box>
      <Box></Box>
    </Stack>
  );
};

export default SideBar;
