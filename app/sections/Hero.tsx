"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }),
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {profile.status}
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4"
          >
            {profile.role}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="text-muted-foreground leading-relaxed mb-8 max-w-md"
          >
            {profile.tagline}
          </motion.p>

          {/* Meta */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="flex items-center gap-4 mb-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-primary" />
              {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-primary" />
              {profile.experience} Experience
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex flex-wrap gap-3 mb-8"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
              <ArrowDown size={15} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-6 py-3 font-medium rounded-xl border border-border hover:bg-muted transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={15} />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="flex items-center gap-3"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-40 scale-105" />
            {/* Spinning dashed ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 scale-110"
              style={{ animation: "spin 20s linear infinite" }}
            />
            {/* Avatar */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 bg-background border border-border rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for hire
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      <style jsx>{`
        @keyframes spin {
          from { transform: scale(1.1) rotate(0deg); }
          to { transform: scale(1.1) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
