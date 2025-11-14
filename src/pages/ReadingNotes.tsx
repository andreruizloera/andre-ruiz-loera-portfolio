import { useState } from "react";
import { FileText, Calendar, Search, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ReadingNote {
  title: string;
  author: string;
  category: string;
  date: string;
  status: "Completed" | "In Progress" | "Planned";
  summary: string;
  tags: string[];
  keyTakeaways?: string[];
  source?: string;
  citation?: string;
}

const ReadingNotes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const readings: ReadingNote[] = [
    {
      title: "Principles of Mathematical Analysis",
      author: "Walter Rudin",
      category: "Mathematics",
      date: "2024-12",
      status: "In Progress",
      summary: "Rigorous treatment of real analysis covering metric spaces, sequences, series, continuity, differentiation, and Riemann-Stieltjes integration.",
      tags: ["Real Analysis", "Metric Spaces", "Topology"],
      keyTakeaways: [
        "Foundation for advanced mathematical thinking",
        "Rigorous epsilon-delta proofs",
        "Completeness and compactness principles"
      ],
      source: "Textbook",
      citation: "Rudin, W. (1976). Principles of Mathematical Analysis. McGraw-Hill."
    },
    {
      title: "Introduction to Quantum Mechanics",
      author: "David J. Griffiths",
      category: "Physics",
      date: "2024-11",
      status: "Completed",
      summary: "Comprehensive introduction to quantum mechanics including wave functions, Schrödinger equation, and quantum harmonic oscillator.",
      tags: ["Quantum Mechanics", "Wave Functions", "Operators"],
      keyTakeaways: [
        "Wave-particle duality foundations",
        "Probability interpretation of quantum states",
        "Time-independent Schrödinger equation applications"
      ],
      source: "Textbook",
      citation: "Griffiths, D. J. (2018). Introduction to Quantum Mechanics. Cambridge University Press."
    },
    {
      title: "The Efficient Market Hypothesis",
      author: "Eugene Fama",
      category: "Economics",
      date: "2024-12",
      status: "Completed",
      summary: "Seminal paper on market efficiency, introducing the concept that asset prices fully reflect all available information.",
      tags: ["Finance", "Market Theory", "Econometrics"],
      keyTakeaways: [
        "Three forms of market efficiency",
        "Random walk hypothesis implications",
        "Empirical testing methodologies"
      ],
      source: "Journal Article",
      citation: "Fama, E. F. (1970). Efficient Capital Markets. Journal of Finance, 25(2), 383-417."
    },
    {
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, Stein",
      category: "Computer Science",
      date: "2024-10",
      status: "In Progress",
      summary: "Comprehensive coverage of algorithms including sorting, data structures, graph algorithms, and computational complexity.",
      tags: ["Algorithms", "Data Structures", "Complexity Theory"],
      keyTakeaways: [
        "Big-O notation and asymptotic analysis",
        "Divide-and-conquer paradigm",
        "Dynamic programming techniques"
      ],
      source: "Textbook",
      citation: "Cormen, T. H., et al. (2009). Introduction to Algorithms. MIT Press."
    },
    {
      title: "Attention Is All You Need",
      author: "Vaswani et al.",
      category: "Research Papers",
      date: "2024-09",
      status: "Completed",
      summary: "Revolutionary paper introducing the Transformer architecture, eliminating recurrence and relying entirely on attention mechanisms.",
      tags: ["Deep Learning", "NLP", "Transformers"],
      keyTakeaways: [
        "Self-attention mechanism fundamentals",
        "Parallel processing advantages",
        "Foundation for modern LLMs"
      ],
      source: "arXiv:1706.03762",
      citation: "Vaswani, A., et al. (2017). Attention Is All You Need. NeurIPS."
    },
    {
      title: "Statistical Learning Theory",
      author: "Vladimir Vapnik",
      category: "Mathematics",
      date: "2024-09",
      status: "Completed",
      summary: "Theoretical foundations of machine learning including VC dimension, structural risk minimization, and PAC learning.",
      tags: ["Statistical Learning", "ML Theory", "VC Dimension"],
      keyTakeaways: [
        "VC dimension as complexity measure",
        "Generalization bounds",
        "Structural risk minimization principle"
      ],
      source: "Textbook",
      citation: "Vapnik, V. N. (1998). Statistical Learning Theory. Wiley."
    },
    {
      title: "Game Theory and Economic Behavior",
      author: "Von Neumann & Morgenstern",
      category: "Economics",
      date: "2024-08",
      status: "Completed",
      summary: "Foundational text on game theory establishing mathematical frameworks for strategic decision-making and economic behavior.",
      tags: ["Game Theory", "Decision Theory", "Mathematical Economics"],
      keyTakeaways: [
        "Nash equilibrium concept",
        "Zero-sum game strategies",
        "Utility theory foundations"
      ],
      source: "Textbook",
      citation: "Von Neumann, J., & Morgenstern, O. (1944). Theory of Games and Economic Behavior. Princeton University Press."
    },
    {
      title: "The Nature of Computation",
      author: "Moore & Mertens",
      category: "Computer Science",
      date: "2024-07",
      status: "Planned",
      summary: "Exploration of computational complexity, P vs NP, and the fundamental nature of computation.",
      tags: ["Complexity Theory", "Algorithms", "Theoretical CS"],
      source: "Textbook",
      citation: "Moore, C., & Mertens, S. (2011). The Nature of Computation. Oxford University Press."
    },
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      category: "Philosophy",
      date: "2024-06",
      status: "In Progress",
      summary: "Exploration of consciousness, artificial intelligence, and formal systems through the lens of mathematics, art, and music.",
      tags: ["Philosophy of Mind", "Logic", "AI"],
      keyTakeaways: [
        "Strange loops and self-reference",
        "Incompleteness theorems implications",
        "Emergent properties of formal systems"
      ],
      source: "Book",
      citation: "Hofstadter, D. R. (1979). Gödel, Escher, Bach: An Eternal Golden Braid. Basic Books."
    },
  ];

  const categories = [
    "All",
    "Mathematics",
    "Physics",
    "Economics",
    "Computer Science",
    "Research Papers",
    "Philosophy",
    "General Interest"
  ];

  // Filter readings based on category and search
  const filteredReadings = readings.filter((reading) => {
    const matchesCategory = selectedCategory === "All" || reading.category === selectedCategory;
    const matchesSearch = 
      searchQuery === "" ||
      reading.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reading.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate statistics
  const totalNotes = readings.length;
  const completedNotes = readings.filter(r => r.status === "Completed").length;
  const inProgressNotes = readings.filter(r => r.status === "In Progress").length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "In Progress":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "Planned":
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-display text-5xl font-bold mb-4">Academic Notes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive notes and annotations on academic literature spanning mathematics, 
            physics, economics, computer science, and research papers.
          </p>
        </header>

        {/* Statistics Banner */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="content-card p-4 text-center">
            <div className="text-3xl font-bold text-primary mb-1">{totalNotes}</div>
            <div className="text-sm text-muted-foreground">Total Notes</div>
          </div>
          <div className="content-card p-4 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{completedNotes}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div className="content-card p-4 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">{inProgressNotes}</div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title, author, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredReadings.length} of {totalNotes} notes
          {searchQuery && ` for "${searchQuery}"`}
        </div>

        {/* Reading Notes List */}
        <div className="space-y-6">
          {filteredReadings.length === 0 ? (
            <div className="content-card p-12 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No notes found matching your criteria.</p>
            </div>
          ) : (
            filteredReadings.map((reading, index) => (
              <article key={index} className="content-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <FileText className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold mb-1">{reading.title}</h2>
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {reading.author}
                      </p>
                      <div className="flex items-center gap-3 text-sm flex-wrap mb-3">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                          {reading.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full font-medium ${getStatusColor(reading.status)}`}>
                          {reading.status}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {reading.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{reading.summary}</p>

                {reading.keyTakeaways && reading.keyTakeaways.length > 0 && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-sm">Key Takeaways:</h3>
                    <ul className="space-y-1">
                      {reading.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {reading.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {reading.citation && (
                  <div className="mb-4 p-3 bg-muted/30 rounded border-l-4 border-accent">
                    <p className="text-xs text-muted-foreground font-mono">{reading.citation}</p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Read Full Notes
                  </Button>
                  {reading.source && (
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Source
                    </Button>
                  )}
                </div>
              </article>
            ))
          )}
        </div>

        {/* Philosophy Section */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-display text-xl font-bold mb-3">Note-Taking Philosophy</h3>
          <p className="text-muted-foreground mb-3">
            These notes represent active engagement with academic literature. Each entry includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Summary of main arguments and contributions</li>
            <li>Critical analysis and evaluation of methodology</li>
            <li>Key takeaways and actionable insights</li>
            <li>Connections to related work and broader context</li>
            <li>Proper citations for academic reference</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReadingNotes;
