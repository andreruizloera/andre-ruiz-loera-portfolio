import { GraduationCap, Award, BookOpen, Mail, Code, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Mathematics student, researcher, and lifelong learner
          </p>
        </header>

        <div className="space-y-8">
          {/* Personal Philosophy */}
          <section className="content-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Philosophy & Approach</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I believe mathematics is not just about solving problems—it's about understanding the fundamental 
              structures that govern our world. My approach combines rigorous theoretical foundations with practical 
              applications, exploring how abstract mathematical concepts can illuminate real-world phenomena in 
              economics, computer science, and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through my work, I aim to bridge the gap between pure mathematics and applied fields, making complex 
              ideas accessible while maintaining academic depth. I'm particularly fascinated by the elegant 
              connections between seemingly disparate areas of mathematics and their surprising applications.
            </p>
          </section>

          {/* Education */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold mb-1">
                  University of Illinois Urbana-Champaign
                </h3>
                <p className="text-muted-foreground mb-2">Bachelor of Science in Mathematics</p>
                <p className="text-sm text-muted-foreground mb-3">Expected Graduation: May 2026 | GPA: 3.8/4.0</p>
                
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Real Analysis I & II</p>
                      <p>• Abstract Algebra</p>
                      <p>• Complex Analysis</p>
                      <p>• Differential Equations</p>
                      <p>• Probability Theory</p>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Linear Algebra & Applications</p>
                      <p>• Mathematical Economics</p>
                      <p>• Game Theory</p>
                      <p>• Algorithms & Data Structures</p>
                      <p>• Statistical Methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Interests */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Research Interests</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Pure Mathematics</h3>
                <p className="text-muted-foreground">
                  Real and functional analysis, topology, abstract algebra, and their applications 
                  to modern mathematical problems. Particularly interested in measure theory, topological 
                  spaces, and the deep connections between algebraic and geometric structures.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mathematical Economics</h3>
                <p className="text-muted-foreground">
                  Game theory, optimization, econometric methods, and the mathematical foundations 
                  of economic theory. Exploring Nash equilibria, mechanism design, and the application 
                  of fixed-point theorems to economic models.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Computational Theory</h3>
                <p className="text-muted-foreground">
                  Complexity theory, algorithm design, and the computational aspects of mathematical problems. 
                  Investigating P vs NP, approximation algorithms, and the theoretical limits of computation.
                </p>
              </div>
            </div>
          </section>

          {/* Research Experience */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Research Experience</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-1">Undergraduate Research Assistant</h3>
                <p className="text-sm text-muted-foreground mb-2">Mathematics Department, UIUC | Fall 2023 - Present</p>
                <p className="text-muted-foreground text-sm">
                  Working on topological data analysis methods under Professor [Name]. Investigating 
                  applications of persistent homology to high-dimensional data sets and developing 
                  computational tools for analyzing topological features in complex systems.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Independent Study: Game Theory Applications</h3>
                <p className="text-sm text-muted-foreground mb-2">Economics Department, UIUC | Spring 2024</p>
                <p className="text-muted-foreground text-sm">
                  Conducted independent research on auction theory and mechanism design, with applications 
                  to online advertising markets. Presented findings at the undergraduate research symposium.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Mathematical Software</h3>
                <div className="flex flex-wrap gap-2">
                  {["LaTeX", "Mathematica", "MATLAB", "Maple", "SageMath"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Julia", "C++", "R", "JavaScript"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Libraries & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["NumPy", "SciPy", "Pandas", "TensorFlow", "Git"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Achievements & Honors */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Achievements & Honors</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Dean's List, College of Liberal Arts & Sciences (Fall 2022 - Present)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Undergraduate Research Grant, UIUC Mathematics Department (2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Outstanding Student Award in Real Analysis (Spring 2024)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Member, Mathematical Association of America (MAA)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Member, Society for Industrial and Applied Mathematics (SIAM)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Teaching Assistant, Calculus I & II (Academic Year 2023-2024)</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="content-card p-8 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing mathematics, research opportunities, or potential collaborations. 
              Feel free to reach out via email or connect with me on LinkedIn. I typically respond within 24-48 hours.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="mailto:aruizlo2@illinois.edu">
                  Send Email
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/andre-ruiz-loera" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
