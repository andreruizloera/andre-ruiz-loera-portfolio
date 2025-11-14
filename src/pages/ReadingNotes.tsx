import { FileText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReadingNotes = () => {
  const readings = [
    {
      title: "The Efficient Market Hypothesis",
      author: "Eugene Fama",
      category: "Economics",
      date: "2024-12",
      summary: "Critical analysis of Fama's seminal work on market efficiency, including mathematical formulations and empirical evidence.",
      tags: ["Finance", "Market Theory", "Econometrics"]
    },
    {
      title: "Computational Complexity Theory",
      author: "Various Authors",
      category: "Computer Science",
      date: "2024-11",
      summary: "Survey of P vs NP problem, complexity classes, and implications for algorithm design.",
      tags: ["Complexity Theory", "Algorithms", "Theoretical CS"]
    },
    {
      title: "Game Theory and Economic Behavior",
      author: "Von Neumann & Morgenstern",
      category: "Economics",
      date: "2024-10",
      summary: "Foundational text on game theory with applications to economics and decision-making under uncertainty.",
      tags: ["Game Theory", "Decision Theory", "Mathematical Economics"]
    },
    {
      title: "Statistical Learning Theory",
      author: "Vapnik & Chervonenkis",
      category: "Statistics",
      date: "2024-09",
      summary: "Notes on VC dimension, PAC learning, and the theoretical foundations of machine learning.",
      tags: ["Statistical Learning", "ML Theory", "VC Dimension"]
    },
  ];

  const categories = ["All", "Economics", "Computer Science", "Mathematics", "Statistics"];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Reading Notes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Critical annotations and summaries of academic papers, books, and research 
            across economics, computer science, and related fields.
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

        {/* Reading Notes List */}
        <div className="space-y-6">
          {readings.map((reading, index) => (
            <article key={index} className="content-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  <FileText className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold mb-1">{reading.title}</h2>
                    <p className="text-sm text-muted-foreground font-medium mb-2">
                      {reading.author}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded">
                        {reading.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {reading.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{reading.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {reading.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm">
                Read Full Notes
              </Button>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-display text-xl font-bold mb-3">Reading Philosophy</h3>
          <p className="text-muted-foreground mb-3">
            These notes represent active engagement with academic literature. Each entry includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Summary of main arguments and contributions</li>
            <li>Critical analysis and evaluation of methodology</li>
            <li>Connections to related work and broader context</li>
            <li>Open questions and potential research directions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadingNotes;
