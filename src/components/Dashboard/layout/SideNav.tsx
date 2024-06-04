"use client";

import * as React from "react";
import RouterLink from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { paths } from "@/paths";
import { NavItemConfig } from "@/types/nav";
import { isNavItemActive } from "@/lib/is-nav-item-active";
import { navItems } from "./nav-items";

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        bgcolor: "#121621",
        color: "#b3b9c6",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        height: "100%",
        left: 0,
        maxWidth: "100%",
        position: "fixed",
        scrollbarWidth: "none",
        top: 0,
        width: "var(--SideNav-width)",
        zIndex: "var(--SideNav-zIndex)",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Stack spacing={2} sx={{ p: 3 }}>
        <Box
          component={RouterLink}
          href={paths.home}
          sx={{ display: "inline-flex" }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "1.25rem",
              fontWeight: 500,
              lineHeight: "32px",
            }}
          >
            Dashboard
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ borderColor: "#434a60" }} />
      <Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
        {renderNavItems({ pathname, items: navItems })}
      </Box>
      <Divider sx={{ borderColor: "#434a60" }} />
      <Stack spacing={2} sx={{ p: "12px" }}>
        <Button
          component="a"
          endIcon={<OpenInNewIcon fontSize="small" />}
          href=""
          sx={{ color: "#b3b9c6" }}
          target="_blank"
          variant="text"
        >
          Support Center
        </Button>
      </Stack>
    </Box>
  );
}

function renderNavItems({
  items = [],
  pathname,
}: {
  items?: NavItemConfig[];
  pathname: string;
}): React.JSX.Element {
  const children = items.reduce(
    (acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
      const { key, childrenItems, ...item } = curr;
      acc.push(
        <NavItem
          key={key}
          pathname={pathname}
          {...item}
          childrenItems={childrenItems || []}
        />
      );

      return acc;
    },
    []
  );

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends NavItemConfig {
  pathname: string;
  childrenItems: NavItemConfig[];
}

interface NavItemProps extends NavItemConfig {
  pathname: string;
  childrenItems: NavItemConfig[];
}

function NavItem({
  disabled,
  external,
  href,
  icon,
  matcher,
  pathname,
  title,
  childrenItems = [],
}: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({
    disabled,
    external,
    href,
    matcher,
    pathname,
    childrenItems,
  });

  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? "a" : RouterLink,
              href,
              target: external ? "_blank" : undefined,
              rel: external ? "noreferrer" : undefined,
            }
          : { role: "button" })}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          color: "#b3b9c6",
          cursor: "pointer",
          display: "flex",
          flex: "0 0 auto",
          gap: 1,
          p: "6px 16px",
          position: "relative",
          textDecoration: "none",
          whiteSpace: "nowrap",
          ...(disabled && {
            bgcolor: "#1c202b",
            color: "#667085",
            cursor: "not-allowed",
          }),
          ...(active && {
            bgcolor: "#1591a3",
            color: "#ffffff",
          }),
        }}
      >
        {icon as React.ReactNode}
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography
            component="span"
            sx={{
              color: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
}
