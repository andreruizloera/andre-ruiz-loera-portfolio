import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getPost } from "@/data/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen py-24 px-4 text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-accent hover:underline">
          Back to the blog
        </Link>
      </div>
    );
  }

  const { Component } = post;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> All posts
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <Component />
      </div>
    </div>
  );
};

export default BlogPost;
