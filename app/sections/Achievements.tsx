"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Trophy, X, ChevronLeft, ChevronRight, Award, Star } from "lucide-react";

const achievementPhotos = [
  {
    src: "/received_award.jpeg",
    alt: "Santosh Solanki receiving Certificate of Excellence at Ideal IT Techno",
    caption: "Receiving the Certificate of Excellence",
  },
  {
    src: "/received_award_2.jpeg",
    alt: "Santosh Solanki with Game Changer Award trophy at Ideal IT Techno",
    caption: "Game Changer Award — with the team",
  },
  {
    src: "/received_award_3.jpeg",
    alt: "Santosh Solanki holding trophy and Certificate of Excellence",
    caption: "Proud moment with the trophy & certificate",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + achievementPhotos.length) % achievementPhotos.length));
  const next = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % achievementPhotos.length));

  return (
    <section id="achievements" className="py-24 bg-muted/30">
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
            Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Achievements
          </h2>
        </motion.div>

        {/* Award card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-2xl border border-border bg-card overflow-hidden mb-10"
        >
          {/* Card top accent strip */}
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

          <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
            {/* Trophy icon */}
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-yellow-500/15 border border-yellow-500/30 flex items-center justify-center">
              <Trophy size={26} className="text-yellow-500" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">Game Changer Award</h3>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-600 dark:text-yellow-400 text-xs font-medium">
                  <Star size={10} />
                  Excellence
                </span>
              </div>
              <p className="text-sm text-primary font-medium mb-3">
                Ideal IT Techno Pvt. Ltd.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                 Received the <strong className="text-foreground">&quot;Game Changer Award&quot;</strong> for
                outstanding performance and impactful contributions to project delivery and team
                success. Recognised for consistently raising the bar and driving meaningful results
                across multiple high-impact projects.
              </p>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Outstanding Performance", "Project Delivery", "Team Collaboration", "Impact"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg border border-border bg-muted/60 text-xs font-medium text-muted-foreground"
                  >
                    <Award size={10} className="text-primary" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
            📸 Award Ceremony Photos — click to enlarge
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {achievementPhotos.map((photo, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + idx * 0.1 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`View photo: ${photo.caption}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium text-left leading-tight">
                    {photo.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-3xl max-h-[80vh] rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={achievementPhotos[lightboxIdx].src}
                alt={achievementPhotos[lightboxIdx].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
              {/* Caption bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-3">
                <p className="text-white text-sm text-center">
                  {achievementPhotos[lightboxIdx].caption}
                </p>
                <p className="text-white/50 text-xs text-center mt-0.5">
                  {lightboxIdx + 1} / {achievementPhotos.length}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
