import { ComponentType } from "react";
import BuildingGreatWebsitesWithClaude from "@/content/blog/building-great-websites-with-claude";

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO
  readTime: string;
  excerpt: string;
  tags: string[];
  Component: ComponentType;
}

export const posts: BlogPost[] = [
  {
    slug: "building-great-websites-with-claude",
    title: "How to Build Great Websites with Claude",
    date: "2026-06-20",
    readTime: "9 min read",
    excerpt:
      "Animated, award-style sites aren't magic — they're a small set of repeatable techniques. Here's the stack, the patterns, and how to drive Claude to build them. Every effect on this page is live and original.",
    tags: ["Claude", "Web Design", "Framer Motion", "Animation"],
    Component: BuildingGreatWebsitesWithClaude,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
