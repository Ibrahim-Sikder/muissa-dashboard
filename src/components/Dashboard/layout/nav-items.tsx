import { paths } from "@/paths";
import { NavItemConfig } from "@/types/nav";
import { FaChartPie, FaUsers, FaPlug } from "react-icons/fa";
import { GrBlog, GrBusinessService } from "react-icons/gr";

export const navItems: NavItemConfig[] = [
  {
    key: "overview",
    title: "Overview",
    href: paths.dashboard.overview,
    icon: <FaChartPie />,
  },
  {
    key: "customers",
    title: "Customers",
    href: paths.dashboard.customers,
    icon: <FaUsers />,
  },

  {
    key: "services",
    title: "Services",
    href: paths.dashboard.services,
    icon: <GrBusinessService />,
    childrenItems: [
      {
        key: "create-service",
        title: "Create Service",
        href: `${paths.dashboard.services}/create`,
      },
      {
        key: "edit-services",
        title: "Manage Services",
        href: `${paths.dashboard.services}/edit`,
      },
    ],
  },
  {
    key: "blogs",
    title: "Blogs",
    href: paths.dashboard.blogs,
    icon: <GrBlog />,
    childrenItems: [
      {
        key: "create-blog",
        title: "Create Blog",
        href: `${paths.dashboard.blogs}/create`,
      },
      {
        key: "edit-blogs",
        title: "Manage Blogs",
        href: `${paths.dashboard.blogs}/edit`,
      },
    ],
  },
];
