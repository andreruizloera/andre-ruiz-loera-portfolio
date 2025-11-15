import { Download, GraduationCap, Briefcase, Award, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12 flex items-start justify-between">
          <div>
            <h1 className="font-display text-5xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground">
              Academic and professional background
            </p>
          </div>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </header>

        <div className="space-y-8">
          {/* Contact Information */}
          <section className="content-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">Andre Ruiz Loera</h2>
            <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p className="mb-2"><span className="font-semibold">Email:</span> aruizlo2@illinois.edu</p>
                <p className="mb-2"><span className="font-semibold">Location:</span> Urbana-Champaign, IL</p>
              </div>
              <div>
                <p className="mb-2"><span className="font-semibold">LinkedIn:</span> linkedin.com/in/andre-ruiz-loera</p>
                <p className="mb-2"><span className="font-semibold">GitHub:</span> github.com/andreruizloera</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Education</h2>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">Bachelor of Science in Mathematics</h3>
              <p className="text-muted-foreground mb-2">University of Illinois Urbana-Champaign</p>
              <p className="text-sm text-muted-foreground mb-3">Expected Graduation: May 2026 | GPA: 3.8/4.0</p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground">
                  <p>• Real Analysis I & II</p>
                  <p>• Abstract Algebra</p>
                  <p>• Complex Analysis</p>
                  <p>• Differential Equations</p>
                  <p>• Probability Theory</p>
                  <p>• Linear Algebra & Applications</p>
                  <p>• Mathematical Economics</p>
                  <p>• Game Theory</p>
                  <p>• Algorithms & Data Structures</p>
                  <p>• Statistical Methods</p>
                </div>
              </div>
            </div>
          </section>

          {/* Research Experience */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Research Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-1">Undergraduate Research Assistant</h3>
                <p className="text-sm text-muted-foreground mb-2">Mathematics Department, UIUC | Fall 2023 - Present</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Investigated applications of persistent homology to high-dimensional data analysis</li>
                  <li>• Developed computational tools using Python and SciPy for topological feature extraction</li>
                  <li>• Presented findings at weekly research seminars and undergraduate symposium</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Independent Study: Game Theory Applications</h3>
                <p className="text-sm text-muted-foreground mb-2">Economics Department, UIUC | Spring 2024</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Researched auction theory and mechanism design with applications to digital advertising</li>
                  <li>• Analyzed Nash equilibria in multi-agent systems using computational methods</li>
                  <li>• Produced 25-page research paper on optimal auction design strategies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Work Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-1">Teaching Assistant - Calculus I & II</h3>
                <p className="text-sm text-muted-foreground mb-2">Mathematics Department, UIUC | Aug 2023 - May 2024</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Led discussion sections for 30+ students, clarifying complex calculus concepts</li>
                  <li>• Held weekly office hours providing one-on-one tutoring and exam preparation</li>
                  <li>• Graded assignments and exams, providing detailed feedback to improve student understanding</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Mathematics Tutor</h3>
                <p className="text-sm text-muted-foreground mb-2">Campus Learning Center, UIUC | Jan 2023 - Present</p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Provided tutoring for undergraduate mathematics courses including calculus, linear algebra, and differential equations</li>
                  <li>• Developed supplementary learning materials and problem sets for struggling students</li>
                  <li>• Maintained 4.9/5.0 average student satisfaction rating</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <p className="text-sm text-muted-foreground">Python, Julia, C++, R, JavaScript, SQL, MATLAB</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mathematical Software</h3>
                <p className="text-sm text-muted-foreground">LaTeX, Mathematica, MATLAB, Maple, SageMath, GeoGebra</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Libraries & Frameworks</h3>
                <p className="text-sm text-muted-foreground">NumPy, SciPy, Pandas, Matplotlib, TensorFlow, PyTorch, scikit-learn</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools & Platforms</h3>
                <p className="text-sm text-muted-foreground">Git, Jupyter, VS Code, Linux, Docker</p>
              </div>
            </div>
          </section>

          {/* Awards & Honors */}
          <section className="content-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-accent" />
              <h2 className="font-display text-3xl font-bold">Awards & Honors</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold">Dean's List</p>
                  <p className="text-sm">College of Liberal Arts & Sciences, UIUC (Fall 2022 - Present)</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold">Undergraduate Research Grant</p>
                  <p className="text-sm">Mathematics Department, UIUC (2024)</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <div>
                  <p className="font-semibold">Outstanding Student Award in Real Analysis</p>
                  <p className="text-sm">Spring 2024</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Professional Memberships */}
          <section className="content-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">Professional Memberships</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mathematical Association of America (MAA)</li>
              <li>• Society for Industrial and Applied Mathematics (SIAM)</li>
              <li>• American Mathematical Society (AMS)</li>
              <li>• UIUC Mathematics Club - Active Member</li>
            </ul>
          </section>

          {/* Publications & Presentations */}
          <section className="content-card p-8">
            <h2 className="font-display text-3xl font-bold mb-6">Publications & Presentations</h2>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold">Topological Methods in Data Analysis</p>
                <p className="text-sm">Undergraduate Research Symposium, UIUC (April 2024)</p>
              </div>
              <div>
                <p className="font-semibold">Auction Theory and Mechanism Design in Digital Markets</p>
                <p className="text-sm">Economics Department Colloquium, UIUC (May 2024)</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
