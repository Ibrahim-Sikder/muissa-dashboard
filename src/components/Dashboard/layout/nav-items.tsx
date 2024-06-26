import { NavItemConfig } from "@/types/nav";
import {
  FaChartPie,
  FaUsers,
  FaQuestionCircle,
  FaFileInvoice,
  FaTicketAlt,
} from "react-icons/fa";
import { GrBlog, GrBusinessService } from "react-icons/gr";
import { MdOutlineReviews, MdPayment, MdPrivacyTip } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { paths } from "@/paths";

export const navItems: NavItemConfig[] = [
  {
    key: "overview",
    title: "Quick Overview",
    href: paths.dashboard.overview,
    icon: <FaChartPie />,
  },
  {
    key: "customers",
    title: "Manage Customers",
    href: paths.dashboard.customers,
    icon: <FaUsers />,
    childrenItems: [
      {
        key: "create-details",
        title: "Create Customer Details",
        href: `${paths.dashboard.customers}/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.customers}` },
      },
    ],
  },
  
  {
    key: "services",
    title: "Manage Services",
    href: paths.dashboard.services,
    icon: <GrBusinessService />,
    childrenItems: [
      {
        key: "service-details",
        title: "Service Details",
        href: `${paths.dashboard.services}/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.services}` },
      },
      {
        key: "create-service",
        title: "Create Service",
        href: `${paths.dashboard.services}/create`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.services}/create`,
        },
      },
      {
        key: "edit-service",
        title: "Edit Service",
        href: `${paths.dashboard.services}/edit/:id`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.services}/edit`,
        },
      },
    ],
  },
  {
    key: "blogs",
    title: "Manage Blogs",
    href: paths.dashboard.blogs,
    icon: <GrBlog />,
    childrenItems: [
      {
        key: "blog-details",
        title: "Blog Details",
        href: `${paths.dashboard.blogs}/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.blogs}` },
      },
      {
        key: "create-blog",
        title: "Create Blog",
        href: `${paths.dashboard.blogs}/create`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.blogs}/create`,
        },
      },
      {
        key: "edit-blog",
        title: "Edit Blog",
        href: `${paths.dashboard.blogs}/edit/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.blogs}/edit` },
      },
    ],
  },
  {
    key: "coupons",
    title: "Manage Coupons & Discount ",
    href: paths.dashboard.coupons,
    icon: <FaTicketAlt />,
    childrenItems: [
      {
        key: "create-coupon",
        title: "Create Coupon",
        href: `${paths.dashboard.coupons}/create`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.coupons}/create`,
        },
      },
      {
        key: "edit-coupon",
        title: "Edit Coupon",
        href: `${paths.dashboard.coupons}/edit/:id`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.coupons}/edit`,
        },
      },
    ],
  },
  {
    key: "reviews",
    title: "Manage Reviews",
    href: paths.dashboard.reviews,
    icon: <MdOutlineReviews />,
    childrenItems: [
      {
        key: "create-review",
        title: "Create Review",
        href: `${paths.dashboard.reviews}/create`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.reviews}/create`,
        },
      },
      {
        key: "edit-review",
        title: "Edit Review",
        href: `${paths.dashboard.reviews}/edit/:id`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.reviews}/edit`,
        },
      },
    ],
  },
  {
    key: "payments",
    title: "Manage Payments",
    href: paths.dashboard.payments,
    icon: <MdPayment />,
    childrenItems: [
      {
        key: "payment-details",
        title: "Payment Details",
        href: `${paths.dashboard.payments}/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.payments}` },
      },
    ],
  },
  {
    key: "invoices",
    title: "Manage Invoices",
    href: paths.dashboard.invoices,
    icon: <FaFileInvoice />,
    childrenItems: [
      {
        key: "invoice-details",
        title: "Invoice Details",
        href: `${paths.dashboard.invoices}/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.invoices}` },
      },
    ],
  },
  {
    key: "terms-privacy",
    title: "Terms & Privacy",
    href: paths.dashboard.policies,
    icon: <MdPrivacyTip />,
    childrenItems: [
      {
        key: "edit-policies",
        title: "Edit Policies",
        href: `${paths.dashboard.policies}/edit`,
        matcher: {
          type: "startsWith",
          href: `${paths.dashboard.policies}/edit`,
        },
      },
    ],
  },
  {
    key: "faqs",
    title: "Manage FAQs",
    href: paths.dashboard.faqs,
    icon: <FaQuestionCircle />,
    childrenItems: [
      {
        key: "create-faq",
        title: "Create FAQ",
        href: `${paths.dashboard.faqs}/create`,
        matcher: { type: "startsWith", href: `${paths.dashboard.faqs}/create` },
      },
      {
        key: "edit-faq",
        title: "Edit FAQ",
        href: `${paths.dashboard.faqs}/edit/:id`,
        matcher: { type: "startsWith", href: `${paths.dashboard.faqs}/edit` },
      },
    ],
  },
  {
    key: "user",
    title: "User Management",
    href: paths.dashboard.users,
    icon: <FaUsers />,
  },
  {
    key: "support",
    title: "Support",
    href: paths.dashboard.support,
    icon: <FcCustomerSupport />,
  },

];
