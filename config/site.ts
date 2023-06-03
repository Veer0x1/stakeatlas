export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Cars & Bids",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Auctions",
      href: "/",
    },
    {
      title: "Sell a Car",
      href: "/",
    },
    {
      title: "What's Cars & Bids?",
      href: "/",
    },
    {
      title: "Daily Email",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
