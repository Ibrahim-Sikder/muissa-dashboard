import { paths } from "@/paths";
import { NavItemConfig } from "@/types/nav";
import {
  FaChartPie,
  FaUsers,
  FaPlug,
  FaCog,
  FaUser,
  FaExclamationTriangle,
} from "react-icons/fa";

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
    key: "integrations",
    title: "Integrations",
    href: paths.dashboard.integrations,
    icon: <FaPlug />,
  },
  {
    key: "settings",
    title: "Settings",
    href: paths.dashboard.settings,
    icon: <FaCog />,
  },
  {
    key: "account",
    title: "Account",
    href: paths.dashboard.account,
    icon: <FaUser />,
  },
  {
    key: "error",
    title: "Error",
    href: paths.errors.notFound,
    icon: <FaExclamationTriangle />,
  },
];
