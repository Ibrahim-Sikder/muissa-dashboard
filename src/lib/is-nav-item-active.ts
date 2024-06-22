import type { NavItemConfig } from "@/types/nav";
import { paths } from "@/paths";

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
          pathname,
          disabled: child.disabled,
          external: child.external,
          href: child.href,
          matcher: child.matcher,
          childrenItems: child.childrenItems,
        })
      ) {
        return true;
      }
    }
  }

  // Handle dynamic routes with parameters
  if (matcher) {
    if (matcher.type === "startsWith") {
      return pathname.startsWith(matcher.href);
    }

    if (matcher.type === "equals") {
      const matcherSegments = matcher.href.split("/");
      const pathSegments = pathname.split("/");
      if (matcherSegments.length !== pathSegments.length) {
        return false;
      }

      for (let i = 0; i < matcherSegments.length; i++) {
        if (
          matcherSegments[i] !== pathSegments[i] &&
          !matcherSegments[i].startsWith(":")
        ) {
          return false;
        }
      }
      return true;
    }

    return false;
  }

  // Default match: exact href match
  return pathname === href;
}
