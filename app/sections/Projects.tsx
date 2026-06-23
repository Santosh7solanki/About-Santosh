"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider uppercase">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Things I&apos;ve shipped
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Production-grade applications built across various domains — OTT, sports, services, and community platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Background gradient on hover */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  project.color
                )}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl mb-2 block">{project.emoji}</span>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", project.accent)} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-muted text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Santosh7solanki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all group"
          >
            <Github size={16} />
            View more on GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
