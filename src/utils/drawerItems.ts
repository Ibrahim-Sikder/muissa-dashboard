import { USER_ROLE } from "@/constant/role";
import { DrawerItem, userRole } from "@/types/common";
import {
  Apartment,
  BorderColor,
  Dashboard,
  DomainAdd,
  DriveFileRenameOutline,
  FoundationRounded,
  Group,
  Hotel,
  LocationCity,
} from "@mui/icons-material";

export const drawerItems = (role: userRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `super-admin`,
        icon: Dashboard,
      });
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}`,
        icon: Dashboard,
      });

      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: Dashboard,
        },
      

      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
