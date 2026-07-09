export const profile = {
  name: "Santosh Solanki",
  role: "Frontend React.js Developer",
  tagline: "Passionate Developer committed to creating clean, modern web and app solutions 🚀",
  location: "Indore, India 🇮🇳",
  experience: "3.6+ Years",
  email: "santoshsolanki0716@gmail.com",
  phone: "+918717837777",
  linkedin: "https://www.linkedin.com/in/santosh-solanki-36599b186/",
  github: "https://github.com/Santosh7solanki",
  // avatar: "https://ui-avatars.com/api/?name=Santosh+Solanki&size=400&background=6366f1&color=ffffff&bold=true&format=svg",
  avatar: "/santosh_profile.png",
  about: [
    "I'm a Frontend React.js Developer with 3.6+ years of experience building scalable, performant web applications. I specialize in crafting intuitive user interfaces with React.js and Next.js, with a strong focus on clean architecture and component-driven development.",
    "I've shipped production features across OTT platforms, sports apps, service marketplaces, and community platforms — collaborating with cross-functional teams to turn complex requirements into elegant solutions that users love.",
  ],
  status: "Open to React.js / Next.js Opportunities 🚀",
};

export const skills = {
  frontend: ["React.js", "React 19", "Next.js", "Angular 14", "JavaScript", "TypeScript"],
  stateManagement: ["Redux Toolkit", "React Query", "Context API"],
  styling: ["Tailwind CSS", "Bootstrap", "Material UI", "Shadcn/UI", "HTML5", "CSS3"],
  backend: ["Firebase", "GraphQL", "REST API Integration"],
  tools: ["Git", "GitLab", "GitHub", "Postman"],
  aiTools: ["ChatGPT", "GitHub Copilot", "Gemini", "Replit AI", "V0 by Vercel", "Lovable"],
};

export const projects = [
  {
    id: 1,
    emoji: "🎬",
    title: "The Veels Network",
    subtitle: "OTT Streaming Platform",
    description:
      "A full-featured OTT platform with authentication, subscription management, and a CMS-driven content pipeline. Built an admin dashboard for content moderation and user analytics.",
    highlights: ["Auth system & profile management", "Admin dashboard with analytics", "CMS integration", "Subscription & payment flow"],
    tech: ["React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    github: "https://github.com/Santosh7solanki",
    live: "#",
    color: "from-purple-500/20 to-indigo-500/20",
    accent: "bg-purple-500",
  },
  {
    id: 2,
    emoji: "⚽",
    title: "Kickscore",
    subtitle: "Sports Management Platform",
    description:
      "A comprehensive sports platform enabling team formation, real-time match tracking, in-app notifications, and a full admin panel for league and tournament management.",
    highlights: ["Team creation & management", "Live match score tracking", "Push notifications", "Admin panel & reporting"],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs"],
    github: "https://github.com/Santosh7solanki",
    live: "#",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "bg-green-500",
  },
  {
    id: 3,
    emoji: "🏢",
    title: "HVAC Service World",
    subtitle: "Service Marketplace Platform",
    description:
      "A marketplace connecting homeowners with HVAC service providers. Features a bidding engine where providers compete for jobs, and a full booking & scheduling flow.",
    highlights: ["Smart booking system", "Provider profile management", "Competitive bidding engine", "Review & rating system"],
    tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Santosh7solanki",
    live: "#",
    color: "from-orange-500/20 to-amber-500/20",
    accent: "bg-orange-500",
  },
  {
    id: 4,
    emoji: "👨‍👩‍👧",
    title: "Foster Folks",
    subtitle: "Family & Foster Care Platform",
    description:
      "A community-driven platform designed to connect foster families and support networks. Focuses on relationship building, resource sharing, and safe user interaction.",
    highlights: ["Community feed & interactions", "Family profile system", "Resource library", "Real-time messaging"],
    tech: ["React.js", "Firebase", "REST APIs", "Context API"],
    github: "https://github.com/Santosh7solanki",
    live: "#",
    color: "from-rose-500/20 to-pink-500/20",
    accent: "bg-rose-500",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
