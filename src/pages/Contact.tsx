import { Mail, Linkedin, Github, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="font-display text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            I'm always interested in discussing mathematics, research, or potential collaborations
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="content-card p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="content-card p-6">
              <h3 className="font-display text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:aruizlo2@illinois.edu" className="text-sm text-muted-foreground hover:text-accent">
                      aruizlo2@illinois.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Urbana-Champaign, IL
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-card p-6">
              <h3 className="font-display text-xl font-bold mb-4">Connect Online</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.linkedin.com/in/andre-ruiz-loera" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/andreruizloera" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </div>

            <div className="content-card p-6 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="font-display text-xl font-bold mb-3">Office Hours</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Available for academic discussions and mentoring:
              </p>
              <p className="text-sm font-semibold">
                Tuesdays & Thursdays
              </p>
              <p className="text-sm text-muted-foreground">
                2:00 PM - 4:00 PM CST
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Please email to schedule an appointment
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <section className="content-card p-8 mt-8">
          <h2 className="font-display text-2xl font-bold mb-4">Topics I'm Happy to Discuss</h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Pure mathematics research and theory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Mathematical economics and game theory</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Computational methods and algorithms</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Undergraduate research opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Mathematics tutoring and mentoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Collaboration on academic projects</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
