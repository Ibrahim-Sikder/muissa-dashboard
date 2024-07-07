import * as React from "react";
import RouterLink from "next/link";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { paths } from "@/paths";

import { removeCookie } from "@/helpers/Cookies";
import { getUserInfo } from "@/services/action";
import { UserRole } from "@/types";

export interface UserPopoverProps {
  anchorEl: Element | null;
  onClose: () => void;
  open: boolean;
  data: { name: string; auth: string };
}

export function UserPopover({
  anchorEl,
  onClose,
  open,
  data,
}: UserPopoverProps): React.JSX.Element {
  const router = useRouter();

  const handleSignOut = (): void => {
    removeCookie("mui-token");
    router.push("/");
  };

  const [userRole, setUserRole] = React.useState<UserRole | null>(null);

  React.useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      setUserRole(userInfo?.role || null);
    };

    fetchUserInfo();
  }, []);

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          sx: {
            width: "240px",
            borderRadius: 1,
            boxShadow: "0px 4px 16px rgba(22, 28, 45, 0.1)",
            bgcolor: "#ffffff",
          },
        },
      }}
    >
      <Box sx={{ p: "16px 20px " }}>
        <Typography variant="subtitle1">{data?.name}</Typography>
        <Typography color="text.secondary" variant="body2">
          {data?.auth}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        sx={{ p: "8px", "& .MuiMenuItem-root": { borderRadius: 1 } }}
      >
        <MenuItem
          component={RouterLink}
          href={paths.dashboard.settings}
          onClick={onClose}
        >
          <ListItemIcon>
            <IoIosSettings fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          component={RouterLink}
          href={paths.dashboard.account}
          onClick={onClose}
        >
          <ListItemIcon>
            <FaUser fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ListItemIcon>
            <IoLogOut fontSize="var(--icon-fontSize-md)" />
          </ListItemIcon>
          Sign out

        </MenuItem>
      </MenuList>
    </Popover>
  );
}
