import { Link } from "react-router-dom";
import { BookOpen, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import mathIcon from "@/assets/math-notes-icon.jpg";
import readingIcon from "@/assets/reading-notes-icon.jpg";
import researchIcon from "@/assets/research-icon.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="hero-section relative py-32 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Andre Ruiz Loera
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-hero-text/90">
            Mathematics Major at University of Illinois Urbana-Champaign
          </p>
          <p className="text-lg text-hero-text/80 max-w-2xl mx-auto mb-10">
            Exploring the intersections of pure mathematics, economics, and computational theory. 
            This is a space for rigorous academic work, thoughtful analysis, and continuous learning.
          </p>
          <Link to="/about">
            <Button size="lg" className="btn-primary text-lg px-8 py-6">
              Learn More About My Work
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Math Notes */}
            <Link to="/math-notes" className="content-card group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={mathIcon} 
                  alt="Mathematical analysis visualization" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-2xl font-bold">Math Notes</h2>
                </div>
                <p className="text-muted-foreground">
                  Comprehensive LaTeX notes on advanced mathematics textbooks including analysis, 
                  algebra, topology, and more.
                </p>
              </div>
            </Link>

            {/* Reading Notes */}
            <Link to="/reading-notes" className="content-card group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={readingIcon} 
                  alt="Academic reading materials" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-2xl font-bold">Reading Notes</h2>
                </div>
                <p className="text-muted-foreground">
                  Critical annotations and summaries of influential academic papers, 
                  books, and research across multiple disciplines.
                </p>
              </div>
            </Link>

            {/* Research & Writing */}
            <Link to="/research" className="content-card group">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={researchIcon} 
                  alt="Research and data analysis" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-2xl font-bold">Research & Writing</h2>
                </div>
                <p className="text-muted-foreground">
                  Original research, essays, and analysis on economics, computer science, 
                  and mathematical applications.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Current Focus
          </h2>
          <div className="content-card p-8">
            <h3 className="font-display text-2xl font-bold mb-4">
              Advanced Real Analysis
            </h3>
            <p className="text-muted-foreground mb-4">
              Working through Rudin's "Principles of Mathematical Analysis" with detailed 
              proofs and supplementary exercises. Focus on measure theory, Lebesgue integration, 
              and functional analysis applications.
            </p>
            <Link to="/math-notes">
              <Button variant="outline" className="mt-2">
                Explore Math Notes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
