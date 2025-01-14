import { USER_ROLE } from "@/constant/role";
import { DrawerItem, userRole } from "@/types/common";
import {
  Book,
  Dashboard,
  Discount,
  EmojiFoodBeverage,
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

  const defaultMenus = [
    {
      title: "Support",
      path: `${role}/support`,
      icon: SupportAgent,
    },
  ];

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
          title: "Metting Book",
          path: `${role}/users`,
          icon: EmojiFoodBeverage,
          child: [
            {
              title: "One To One Consultance",
              path: `${role}/one-to-one-consultance`,
              icon: Group,
            },
            {
              title: "Investment Metting Book",
              path: `${role}/book-metting`,
              icon: Group,
            },
          ],
        },
        {
          title: "User Management  ",
          path: `${role}/users`,
          icon: Group,
          child: [
            {
              title: "Create User ",
              path: `${role}/users`,
              icon: Group,
            },
            {
              title: "All User ",
              path: `${role}/users/alluser`,
              icon: Group,
            },
          ],
        },
        {
          title: "Contact Message",
          path: `${role}/contact-message`,
          icon: Group,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: "/",
          icon: Dashboard,
        },
        {
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
        }
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
