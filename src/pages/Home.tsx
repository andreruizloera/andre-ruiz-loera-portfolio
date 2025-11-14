import { Link } from "react-router-dom";
import { FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
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

      {/* Statistics Banner */}
      <section className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Academic Notes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-lg opacity-90">Research Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-lg opacity-90">Active Fields</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Academic Notes */}
            <Link to="/reading-notes" className="content-card group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src={readingIcon} 
                  alt="Academic reading materials" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-2xl font-bold">Academic Notes</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive notes and critical annotations on academic literature across 
                  mathematics, physics, economics, computer science, and research papers. 
                  Each entry includes detailed summaries, key takeaways, and proper citations.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Mathematics</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Economics</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">CS Theory</span>
                </div>
              </div>
            </Link>

            {/* Research & Writing */}
            <Link to="/research" className="content-card group">
              <div className="aspect-[4/3] relative overflow-hidden">
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
                <p className="text-muted-foreground mb-4">
                  Original research papers, analytical essays, and professional insights on 
                  topics in economics, computational theory, mathematical applications, and more. 
                  Rigorous analysis meets practical applications.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Research Papers</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Analysis</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Insights</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Academic Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This portfolio documents my journey through rigorous mathematical study and its 
            applications to economics and computer science. My goal is to bridge theoretical 
            foundations with practical insights, contributing to both academic discourse and 
            real-world problem-solving. Every note, paper, and project represents a commitment 
            to deep understanding and intellectual growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
