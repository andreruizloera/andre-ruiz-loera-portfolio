import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="nav-bar border-t border-border/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-hero-text/70 text-sm">
            <p className="font-display italic mb-1">A world to know.</p>
            <p className="font-semibold">Andre Ruiz Loera</p>
            <p className="text-xs mt-1">B.S. Mathematics, University of Illinois Urbana-Champaign</p>
            <p className="text-xs">© 2025 Andre Ruiz Loera. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/andre-ruiz-loera"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-hero-text" />
            </a>
            <a
              href="https://github.com/andreruizloera"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-hero-text" />
            </a>
            <a
              href="mailto:aruizlo2@illinois.edu"
              className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-hero-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
