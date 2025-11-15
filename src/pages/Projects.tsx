import { Github, ExternalLink, Code, Brain, TrendingUp, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Topological Data Analysis Toolkit",
    category: "Mathematics & Data Science",
    icon: Brain,
    description: "A Python library for computing persistent homology and analyzing topological features in high-dimensional datasets. Implements Vietoris-Rips and Čech complexes with efficient computational algorithms.",
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib"],
    github: "https://github.com/andreruizloera/tda-toolkit",
    demo: null,
    status: "Active Development"
  },
  {
    title: "Game Theory Simulator",
    category: "Economics & Computation",
    icon: TrendingUp,
    description: "Interactive simulation environment for analyzing Nash equilibria in multi-agent systems. Includes implementations of various auction mechanisms and visualizations of strategic behavior.",
    technologies: ["Julia", "React", "D3.js", "WebGL"],
    github: "https://github.com/andreruizloera/game-theory-sim",
    demo: "https://game-theory-sim.demo",
    status: "Completed"
  },
  {
    title: "Complexity Theory Visualizer",
    category: "Computer Science",
    icon: Cpu,
    description: "Educational tool for visualizing computational complexity classes and reductions. Features interactive graphs of P, NP, NP-Complete relationships with animated algorithm demonstrations.",
    technologies: ["JavaScript", "Three.js", "React", "TypeScript"],
    github: "https://github.com/andreruizloera/complexity-viz",
    demo: "https://complexity-viz.demo",
    status: "Completed"
  },
  {
    title: "Fourier Transform Playground",
    category: "Applied Mathematics",
    icon: Code,
    description: "Interactive web application for exploring Fourier analysis. Allows users to decompose signals, visualize frequency spectra, and understand harmonic components in real-time.",
    technologies: ["Python", "JavaScript", "WebAssembly", "Canvas API"],
    github: "https://github.com/andreruizloera/fourier-playground",
    demo: "https://fourier-playground.demo",
    status: "Completed"
  },
  {
    title: "LaTeX Mathematics Template Collection",
    category: "Academic Tools",
    icon: Code,
    description: "Comprehensive collection of LaTeX templates for mathematical writing, including theorem environments, proof structures, and diagram tools using TikZ.",
    technologies: ["LaTeX", "TikZ", "Shell Scripts"],
    github: "https://github.com/andreruizloera/latex-math-templates",
    demo: null,
    status: "Maintained"
  },
  {
    title: "Differential Equations Solver",
    category: "Computational Mathematics",
    icon: Brain,
    description: "Numerical solver for systems of ordinary and partial differential equations. Implements Runge-Kutta methods, finite difference schemes, and adaptive step-size algorithms.",
    technologies: ["C++", "Python", "MATLAB", "OpenMP"],
    github: "https://github.com/andreruizloera/de-solver",
    demo: null,
    status: "Active Development"
  }
];

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Active Development":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Maintained":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Projects & Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Mathematical software, computational tools, and research implementations
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article key={index} className="content-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-accent mb-3">{project.category}</p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* About Projects Section */}
        <section className="content-card p-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-6 h-6 text-accent" />
            <h2 className="font-display text-2xl font-bold">About These Projects</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-4">
            These projects represent my exploration of the intersection between theoretical mathematics and 
            practical computation. Each project aims to make abstract mathematical concepts more accessible 
            through interactive visualizations, efficient algorithms, or useful tools.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            All code is open-source and available on GitHub. I welcome contributions, suggestions, and 
            collaborations. If you're interested in any of these projects or have ideas for new ones, 
            please feel free to reach out.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;
