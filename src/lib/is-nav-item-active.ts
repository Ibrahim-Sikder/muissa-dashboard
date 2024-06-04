import type { NavItemConfig } from "@/types/nav";

export function isNavItemActive({
  disabled,
  external,
  href,
  matcher,
  pathname,
  childrenItems,
}: Pick<NavItemConfig, "disabled" | "external" | "href" | "matcher"> & {
  pathname: string;
  childrenItems?: NavItemConfig[];
}): boolean {
  if (disabled || !href || external) {
    return false;
  }

  // Check if pathname is either "/dashboard/profile" or "/dashboard/settings"
  if (pathname === "/dashboard/profile" || pathname === "/dashboard/settings") {
    return href === "/dashboard";
  }

  // Check if any of the children items are active
  if (childrenItems && childrenItems.length > 0) {
    for (const child of childrenItems) {
      if (
        isNavItemActive({
          disabled: child.disabled,
          external: child.external,
          href: child.href,
          matcher: child.matcher,
          pathname,
          childrenItems: child.childrenItems,
        })
      ) {
        return true;
      }
    }
  }

  if (matcher) {
    if (matcher.type === "startsWith") {
      return pathname.startsWith(matcher.href);
    }

    if (matcher.type === "equals") {
      return pathname === matcher.href;
    }

    return false;
  }

  return pathname === href;
}
