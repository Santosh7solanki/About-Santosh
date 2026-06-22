"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Globe, Zap } from "lucide-react";
import { profile } from "@/lib/data";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "3.6+" },
  { icon: Code2, label: "Projects Shipped", value: "10+" },
  { icon: Globe, label: "Tech Stack", value: "20+" },
  { icon: Zap, label: "Performance Focus", value: "100%" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono font-medium mb-2 tracking-wider uppercase">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Building things that matter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {profile.about.map((para, i) => (
                <p key={i} className="text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-sm text-foreground mb-1">Currently</p>
                <p className="text-sm text-muted-foreground">{profile.status}</p>
              </div>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon size={18} className="text-primary" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
