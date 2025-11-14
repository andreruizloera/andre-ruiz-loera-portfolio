import { GraduationCap, Award, BookOpen, Mail } from "lucide-react";
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
          {/* Education */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-display text-xl font-bold mb-1">
                  University of Illinois Urbana-Champaign
                </h3>
                <p className="text-muted-foreground mb-2">Bachelor of Science in Mathematics</p>
                <p className="text-sm text-muted-foreground">
                  Focus areas: Real Analysis, Abstract Algebra, Applied Mathematics
                </p>
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
                  to modern mathematical problems.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mathematical Economics</h3>
                <p className="text-muted-foreground">
                  Game theory, optimization, econometric methods, and the mathematical foundations 
                  of economic theory.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Computational Theory</h3>
                <p className="text-muted-foreground">
                  Complexity theory, algorithm design, and the computational aspects of mathematical problems.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Selected Achievements</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Dean's List, College of Liberal Arts & Sciences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Undergraduate Research Assistant, Mathematics Department</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Member, Mathematical Association of America (MAA)</span>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="content-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Mathematical Software</h3>
                <div className="flex flex-wrap gap-2">
                  {["LaTeX", "Mathematica", "MATLAB", "Python", "R"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Julia", "C++", "JavaScript", "SQL"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-md text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="content-card p-8 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Get In Touch</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing mathematics, research opportunities, or potential collaborations. 
              Feel free to reach out via email or connect with me on LinkedIn.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <a href="mailto:andre.ruiz.loera@example.com">
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
