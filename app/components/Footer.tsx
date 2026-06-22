import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground text-center sm:text-left">
          © {year} <span className="font-medium text-foreground">Santosh Solanki</span>. Built with{" "}
          <Heart size={12} className="inline text-pink-500 mx-0.5" />
          using Next.js & Tailwind.
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: profile.github, label: "GitHub" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
