export const paths = {
  home: "/",
  dashboard: {
    overview: "/dashboard",
    account: "/dashboard/profile",
    settings: "/dashboard/settings",
    customers: "/dashboard/customers",
    services: "/dashboard/services",
    blogs: "/dashboard/blogs",
    reviews: "/dashboard/reviews",
    payments: "/dashboard/payments",
    support: "/dashboard/support",
    faqs: "/dashboard/faqs",
    policies: "/dashboard/policies",
    invoices: "/dashboard/invoices",
    coupons: "/dashboard/coupons",
    users: "/dashboard/users",
    membership_fee: "/dashboard/membership-fee",
  },
  help: "/contact-us",
  errors: { notFound: "/errors/not-found" },
} as const;
