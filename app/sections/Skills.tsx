"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Layout, Database, Wrench, Bot, Server, Layers
} from "lucide-react";

const categories = [
  { key: "frontend", label: "Frontend", icon: Layout, color: "text-indigo-500", bg: "bg-indigo-500/10" },
  { key: "stateManagement", label: "State Management", icon: Layers, color: "text-purple-500", bg: "bg-purple-500/10" },
  { key: "styling", label: "Styling & UI", icon: Layout, color: "text-pink-500", bg: "bg-pink-500/10" },
  { key: "backend", label: "Backend & APIs", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
  { key: "tools", label: "Dev Tools", icon: Wrench, color: "text-orange-500", bg: "bg-orange-500/10" },
  { key: "aiTools", label: "AI Tools", icon: Bot, color: "text-cyan-500", bg: "bg-cyan-500/10" },
] as const;

function SkillBadge({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="inline-flex items-center px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-xs font-medium text-foreground hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all cursor-default"
    >
      {label}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider uppercase">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", cat.bg)}>
                  <cat.icon size={16} className={cat.color} />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill, skillIdx) => (
                  <SkillBadge
                    key={skill}
                    label={skill}
                    delay={inView ? catIdx * 0.05 + skillIdx * 0.04 : 0}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
