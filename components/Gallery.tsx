"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, categories } from "@/lib/gallery";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Gallery
          </h2>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-gold text-dark"
                  : "border border-white/20 text-cream/60 hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div layout className="masonry">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="masonry-item cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-cream font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm uppercase tracking-wider">
                      View
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/wiseguyshoddesdon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-dark transition-colors text-sm uppercase tracking-wider"
          >
            Follow @wiseguyshoddesdon for more →
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-cream/70 hover:text-cream z-50"
            >
              <X size={32} />
            </button>

            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream z-50"
              >
                <ChevronLeft size={40} />
              </button>
            )}

            {lightbox < filtered.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/50 hover:text-cream z-50"
              >
                <ChevronRight size={40} />
              </button>
            )}

            <motion.div
              key={filtered[lightbox].src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={1500}
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
              <p className="text-center text-cream/60 text-sm mt-4">
                {filtered[lightbox].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
