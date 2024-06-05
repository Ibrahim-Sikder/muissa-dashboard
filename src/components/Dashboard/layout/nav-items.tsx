import { paths } from "@/paths";
import { NavItemConfig } from "@/types/nav";
import { FaChartPie, FaUsers, FaQuestionCircle } from "react-icons/fa";
import { GrBlog, GrBusinessService } from "react-icons/gr";
import { MdOutlineReviews, MdPayment, MdPrivacyTip } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
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
  },

  {
    key: "services",
    title: "Manage Services",
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
    title: "Manage Blogs",
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
      },
      {
        key: "edit-reviews",
        title: "Manage Reviews",
        href: `${paths.dashboard.reviews}/edit`,
      },
    ],
  },
  {
    key: "payments",
    title: "Manage Payments",
    href: paths.dashboard.payments,
    icon: <MdPayment />,
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
      },
      {
        key: "edit-faqs",
        title: "Manage FAQs",
        href: `${paths.dashboard.faqs}/edit`,
      },
    ],
  },

  {
    key: "support",
    title: "Support",
    href: paths.dashboard.support,
    icon: <FcCustomerSupport/>,
  },
];
