import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { posts } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Notes on building, design, and the tools I use to ship.
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} /> {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={14} /> {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-foreground/70">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Read post
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
