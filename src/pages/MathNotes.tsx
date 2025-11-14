import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MathNotes = () => {
  const notes = [
    {
      title: "Real Analysis",
      textbook: "Principles of Mathematical Analysis - Rudin",
      description: "Complete notes covering metric spaces, sequences and series, continuity, differentiation, and Riemann-Stieltjes integration.",
      topics: ["Metric Spaces", "Sequences & Series", "Continuity", "Differentiation", "Integration"],
      status: "In Progress"
    },
    {
      title: "Abstract Algebra",
      textbook: "Abstract Algebra - Dummit & Foote",
      description: "Notes on group theory, ring theory, field theory, and Galois theory with detailed proofs and examples.",
      topics: ["Group Theory", "Ring Theory", "Modules", "Field Theory", "Galois Theory"],
      status: "Planned"
    },
    {
      title: "Linear Algebra",
      textbook: "Linear Algebra Done Right - Axler",
      description: "Vector spaces, linear transformations, eigenvalues, inner product spaces, and canonical forms.",
      topics: ["Vector Spaces", "Linear Maps", "Eigenvalues", "Inner Products", "Operators"],
      status: "Completed"
    },
    {
      title: "Topology",
      textbook: "Topology - Munkres",
      description: "Point-set topology, connectedness, compactness, and introduction to algebraic topology.",
      topics: ["Topological Spaces", "Connectedness", "Compactness", "Fundamental Group"],
      status: "Planned"
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Mathematics Notes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive LaTeX-formatted notes on advanced mathematics textbooks. 
            These notes include detailed proofs, examples, and exercises with solutions.
          </p>
        </header>

        <div className="space-y-6">
          {notes.map((note, index) => (
            <article key={index} className="content-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-accent mt-1" />
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-1">{note.title}</h2>
                    <p className="text-sm text-muted-foreground font-medium">{note.textbook}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  note.status === "Completed" ? "bg-green-100 text-green-800" :
                  note.status === "In Progress" ? "bg-blue-100 text-blue-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {note.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{note.description}</p>

              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2 text-foreground/70">Topics Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {note.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-muted rounded-md text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" disabled={note.status === "Planned"}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View PDF
                </Button>
                <Button variant="outline" size="sm" disabled={note.status === "Planned"}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LaTeX Source
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="font-display text-xl font-bold mb-3">About These Notes</h3>
          <p className="text-muted-foreground">
            All notes are typeset in LaTeX following academic standards. They include detailed proofs, 
            worked examples, and solutions to selected exercises. The goal is to create a comprehensive 
            reference that can serve both as study material and as a foundation for deeper mathematical understanding.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathNotes;
