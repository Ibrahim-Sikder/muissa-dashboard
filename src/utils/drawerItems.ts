import { USER_ROLE } from "@/constant/role";
import { DrawerItem, userRole } from "@/types/common";
import {
  Dashboard,

} from "@mui/icons-material";

export const drawerItems = (role: userRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `/`,
          icon: Dashboard,
        },
        {
          title: "Manage Customer",
          path: `${role}/customers`,
          icon: Dashboard,
        },
        {
          title: "Manage Services",
          path: `${role}/services`,
          icon: Dashboard,
        },
        {
          title: "Manage Blogs",
          path: `${role}/blogs`,
          icon: Dashboard,
        },
        {
          title: "Manage Coupons & Discount ",
          path: `${role}/coupons`,
          icon: Dashboard,
        },
        {
          title: "Manage Reviews",
          path: `${role}/reviews`,
          icon: Dashboard,
        },
        {
          title: "Manage Payments",
          path: `${role}/payments`,
          icon: Dashboard,
        },
        {
          title: "Manage Invoices ",
          path: `${role}/invoices`,
          icon: Dashboard,
        },
        {
          title: "Terms & Privacy ",
          path: `${role}/policies`,
          icon: Dashboard,
        },
        {
          title: "Mange FAQs ",
          path: `${role}/faqs`,
          icon: Dashboard,
        },
        {
          title: "Membership Fee ",
          path: `${role}/membership-fee`,
          icon: Dashboard,
        },
        {
          title: "User Management  ",
          path: `${role}/users`,
          icon: Dashboard,
        },
        {
          title: "Support",
          path: `${role}/support`,
          icon: Dashboard,
        },
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: '/',
          icon: Dashboard,
        }, {
        title: "Manage Customer",
        path: `${role}/customers`,
        icon: Dashboard,
      },

        {
          title: "Manage Blogs",
          path: `${role}/blogs`,
          icon: Dashboard,
        },

        {
          title: "Manage Reviews",
          path: `${role}/reviews`,
          icon: Dashboard,
        },

        {
          title: "Support",
          path: `${role}/support`,
          icon: Dashboard,
        },


      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
