import { Sparkles, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  const posts = [
    {
      title: "Optimal Stopping in Sequential Decision Problems",
      category: "Mathematical Economics",
      date: "2024-12-15",
      readTime: "12 min read",
      excerpt: "An exploration of optimal stopping theory applied to investment decisions under uncertainty, with applications to real options valuation.",
      tags: ["Optimal Control", "Dynamic Programming", "Finance"]
    },
    {
      title: "Computational Methods in Econometric Analysis",
      category: "Econometrics",
      date: "2024-11-28",
      readTime: "15 min read",
      excerpt: "Survey of modern computational approaches to econometric estimation, including bootstrap methods and Monte Carlo simulation.",
      tags: ["Econometrics", "Computational Methods", "Statistics"]
    },
    {
      title: "The Role of Topology in Data Analysis",
      category: "Mathematics",
      date: "2024-11-10",
      readTime: "10 min read",
      excerpt: "Introduction to topological data analysis and its applications in understanding high-dimensional data structures.",
      tags: ["Topology", "Data Science", "Applied Mathematics"]
    },
    {
      title: "Algorithmic Game Theory and Mechanism Design",
      category: "Computer Science",
      date: "2024-10-22",
      readTime: "18 min read",
      excerpt: "Analysis of algorithmic approaches to game-theoretic problems, with focus on auction design and incentive compatibility.",
      tags: ["Game Theory", "Algorithms", "Economics"]
    },
  ];

  const categories = ["All", "Mathematics", "Economics", "Computer Science", "Interdisciplinary"];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Research & Writing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Original research, essays, and analysis exploring the intersection of mathematics, 
            economics, and computer science. All work is rigorously researched and academically oriented.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <article className="content-card p-8 mb-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Featured</span>
          </div>
          <h2 className="font-display text-3xl font-bold mb-3">
            {posts[0].title}
          </h2>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {posts[0].date}
            </span>
            <span>{posts[0].readTime}</span>
            <span className="px-2 py-1 bg-accent/10 text-accent rounded">
              {posts[0].category}
            </span>
          </div>
          <p className="text-muted-foreground mb-4 text-lg">
            {posts[0].excerpt}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {posts[0].tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm">
                {tag}
              </span>
            ))}
          </div>
          <Button>Read Article</Button>
        </article>

        {/* Recent Posts */}
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            Recent Publications
          </h2>
          <div className="space-y-6">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="content-card p-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded">
                    {post.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-display text-xl font-bold mb-3">About This Work</h3>
          <p className="text-muted-foreground">
            This section features original research and analytical writing that bridges theory and application. 
            Each piece undergoes rigorous research and aims to contribute meaningful insights to its field. 
            Topics span mathematical economics, computational theory, econometric methods, and interdisciplinary applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Research;
