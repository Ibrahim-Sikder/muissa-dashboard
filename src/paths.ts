export const paths = {
  home: "/",
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/profile",
    settings: "/dashboard/settings",
    customers: "/dashboard/customers",
    services: "/dashboard/services",
    blogs: "/dashboard/blogs",
  },
  help: "/contact-us",
  errors: { notFound: "/errors/not-found" },
} as const;
