"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { FaBars } from "react-icons/fa";
import { MobileNav } from "./MobileNav";
import { UserPopover } from "./UserPropover";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getCookie } from "@/helpers/Cookies";
import Loader from "@/components/Loader";
import { usePathname } from "next/navigation";
 

const MainNav = (): React.JSX.Element => {
  const [openNav, setOpenNav] = React.useState<boolean>(false);

  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const token = getCookie("mui-token");
  const pathName = usePathname();

  const { data, error, isLoading, refetch } = useGetSingleUserQuery({ token });

  React.useEffect(() => {
    refetch();
  }, [pathName, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1 className="text-center">Data not found </h1>;
  }

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid #dcdfe4",
          backgroundColor: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "64px",
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: "none" } }}
            >
              <FaBars />
            </IconButton>
          </Stack>
          <Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
            <Avatar
              component="div"
              onClick={handleOpen}
              ref={anchorRef as React.RefObject<HTMLDivElement>}
              src={data?.profile_pic ? data?.profile_pic : "/src/assets/logo/profile.png"}
              sx={{ cursor: "pointer" }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover
        anchorEl={anchorRef.current}
        onClose={handleClose}
        open={open}
        data={data}
      />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
};

export default MainNav;
