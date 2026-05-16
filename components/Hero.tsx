"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image — shop interior */}
      <Image
        src="/gallery/cut-08.jpg"
        alt="Wise Guys Barbers shop interior with hexagon lights"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Grain */}
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-sans"
        >
          Hoddesdon&apos;s Premier Barbershop
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1] mb-6"
        >
          Sharp Cuts.
          <br />
          <span className="text-gold">Sharper Standards.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Fades, beards, hot towel shaves and more — delivered with
          precision, seven days a week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wiseguysbarberhoddesdon31.booksy.com/a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-dark font-bold px-10 py-4 rounded text-lg transition-colors"
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="border-2 border-cream/30 hover:border-gold text-cream hover:text-gold font-semibold px-10 py-4 rounded text-lg transition-colors"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Bottom info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-dark/80 backdrop-blur-sm border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-cream/60">
          <span>Walk-ins Welcome</span>
          <span className="hidden sm:inline text-gold/40">•</span>
          <span>Open 7 Days</span>
          <span className="hidden sm:inline text-gold/40">•</span>
          <span>22+ Years Experience</span>
          <span className="hidden sm:inline text-gold/40">•</span>
          <span>01992 676774</span>
        </div>
      </motion.div>
    </section>
  );
}
