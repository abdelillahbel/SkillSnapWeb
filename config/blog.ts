export const BLOG_CATEGORIES: {
  title: string;
  slug: "news" | "education";
  description: string;
}[] = [
    {
      title: "News",
      slug: "news",
      description: "Updates and announcements from Next DevUnion.",
    },
    {
      title: "Education",
      slug: "education",
      description: "Educational content about SaaS management.",
    },
  ];

export const BLOG_AUTHORS = {
  devunion: {
    name: "devunion",
    image: "/_static/avatars/devunion.png",
    twitter: "devunion",
  },
  shadcn: {
    name: "shadcn",
    image: "/_static/avatars/shadcn.jpeg",
    twitter: "shadcn",
  },
};
