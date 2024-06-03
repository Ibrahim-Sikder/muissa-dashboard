export const paths = {
  home: "/",
  dashboard: {
    overview: "/dashboard/admin",
    account: "/dashboard/account",
    customers: "/dashboard/customers",
    integrations: "/dashboard/integrations",
    settings: "/dashboard/settings",
  },
  help: "/contact-us",
  errors: { notFound: "/errors/not-found" },
} as const;
