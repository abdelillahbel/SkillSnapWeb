import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "SkillSnap: Build your professional portfolio in minutes! ",
  description:
    "SkillSnap helps you capture and showcase your skills effortlessly. Create your portfolio, share your achievements, and connect with others.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://x.com/devunionorg",
    github: "https://github.com/abdelillahbel/SkillSnapAndroid",
  },
  mailSupport: "apps-support@devunion.dev",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "DevUnion Foundation",
    items: [
      { title: "About", href: "/about" },
      { title: "Enterprise", href: "/enterprise" },
      { title: "Terms", href: "/terms" },
      { title: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "/security" },
      { title: "Software", href: "/software" },
      { title: "Customers", href: "/customers" },
      { title: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Introduction", href: "/guides#Introduction" },
      { title: "Learn & Build", href: "/guides#Learn" },
      { title: "Tools", href: "/tools" },
      { title: "Code Blocks", href: "/code-blocks" },
    ],
  },
];
