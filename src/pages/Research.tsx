import { BookOpen, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const posts = [
  {
    title: "The Banach-Tarski Paradox: A Journey into Mathematical Impossibility",
    category: "Mathematics",
    date: "2024-03-15",
    readTime: "12 min read",
    excerpt: "Exploring one of mathematics' most counterintuitive results and its implications for our understanding of infinity and measure theory.",
    tags: ["Set Theory", "Measure Theory", "Paradoxes"],
    status: "Published"
  },
  {
    title: "Game Theory and Economic Equilibria: A Mathematical Perspective",
    category: "Economics",
    date: "2024-03-08",
    readTime: "15 min read",
    excerpt: "An analysis of Nash equilibria through the lens of fixed-point theorems and topological methods in economic theory.",
    tags: ["Game Theory", "Economics", "Optimization"],
    status: "Published"
  },
  {
    title: "Computational Complexity and P vs NP: Current Approaches",
    category: "Computer Science",
    date: "2024-02-28",
    readTime: "18 min read",
    excerpt: "Examining recent developments in computational complexity theory and potential pathways toward resolving the P vs NP question.",
    tags: ["Complexity Theory", "Algorithms", "Theoretical CS"],
    status: "Published"
  },
  {
    title: "Fourier Analysis in Modern Signal Processing",
    category: "Applied Mathematics",
    date: "2024-02-20",
    readTime: "10 min read",
    excerpt: "Applications of harmonic analysis and Fourier transforms in contemporary signal processing and data compression.",
    tags: ["Fourier Analysis", "Signal Processing", "Applications"],
    status: "Published"
  }
];

const categories = ["All", "Mathematics", "Economics", "Computer Science", "Applied Mathematics"];

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Research & Writing</h1>
          <p className="text-xl text-muted-foreground">
            Mathematical explorations, economic analysis, and computational insights
          </p>
        </header>

        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search by title, content, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <section>
          <h2 className="font-display text-3xl font-bold mb-8">Publications</h2>
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <article key={index} className="content-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded border border-primary/20">
                    {post.category}
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded border ${getStatusColor(post.status)}`}>
                    {post.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{post.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm">Read More</Button>
              </article>
            ))}
          </div>
        </section>

        <section className="content-card p-8 mt-12 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="font-display text-2xl font-bold">About This Work</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            This collection represents my ongoing exploration of the intersections between pure mathematics, 
            economic theory, and computational methods.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Research;
