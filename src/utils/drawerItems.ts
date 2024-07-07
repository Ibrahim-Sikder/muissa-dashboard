import { USER_ROLE } from "@/constant/role";
import { DrawerItem, userRole } from "@/types/common";
import {
  Book,
  Dashboard,
  Discount,
  Group,
  LiveHelp,
  LocalConvenienceStore,
  Paid,
  Receipt,
  Reviews,
  SafetyCheck,
  SupportAgent,

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
          icon: Group,
        },
        {
          title: "Manage Services",
          path: `${role}/services`,
          icon: LocalConvenienceStore,
        },
        {
          title: "Manage Blogs",
          path: `${role}/blogs`,
          icon: Book,
        },
        {
          title: "Manage Coupons & Discount ",
          path: `${role}/coupons`,
          icon: Discount,
        },
        {
          title: "Manage Reviews",
          path: `${role}/reviews`,
          icon: Reviews,
        },
        {
          title: "Manage Payments",
          path: `${role}/payments`,
          icon: Paid,
        },
        {
          title: "Manage Invoices ",
          path: `${role}/invoices`,
          icon: Receipt,
        },
        {
          title: "Terms & Privacy ",
          path: `${role}/policies`,
          icon: SafetyCheck,
        },
        {
          title: "Mange FAQs ",
          path: `${role}/faqs`,
          icon: LiveHelp,
        },
        {
          title: "Membership Fee ",
          path: `${role}/membership-fee`,
          icon: Dashboard,
        },
        {
          title: "User Management  ",
          path: `${role}/users`,
          icon: Group,
        },
        {
          title: "Contact Message",
          path: `${role}/contact-message`,
          icon: Group,
        },
        {
          title: "Support",
          path: `${role}/support`,
          icon: SupportAgent,
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
        icon: Group,
      },

        {
          title: "Manage Blogs",
          path: `${role}/blogs`,
          icon: Book,
        },

        {
          title: "Manage Reviews",
          path: `${role}/reviews`,
          icon: Reviews,
        },
        {
          title: "Contact Message",
          path: `${role}/contact-message`,
          icon: Group,
        },

        {
          title: "Support",
          path: `${role}/support`,
          icon: SupportAgent,
        },


      );
      break;

    default:
      break;
  }

  return [...roleMenus];
};
