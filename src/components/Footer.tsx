import { Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="nav-bar border-t border-border/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-hero-text/70 text-sm">
            <p className="font-display italic">A world to know.</p>
            <p className="mt-1">Andre Ruiz Loera</p>
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
              href="mailto:andre.ruiz.loera@example.com"
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
