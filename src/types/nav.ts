import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface NavItemConfig {
  key: string;
  title?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?: IconType | ReactNode;
  href?: string;
  items?: NavItemConfig[];
  matcher?: {
    type: "startsWith" | "equals" | "nested" | "includes" | "match";
    href: string;
  };
  childrenItems?: NavItemConfig[];
}
