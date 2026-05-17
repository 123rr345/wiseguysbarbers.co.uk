"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BookingCTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <Image
        src="/team.jpg"
        alt="The Wise Guys Barbers team with a happy customer"
        fill
        className="object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-6">
            Ready for your next cut?
          </h2>
          <p className="text-cream/60 text-lg mb-10 max-w-xl mx-auto">
            Walk in or book ahead — either way, you&apos;re leaving looking sharp.
          </p>
          <a
            href="https://wiseguysbarberhoddesdon31.booksy.com/a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-bold px-12 py-5 rounded text-lg transition-colors"
          >
            Book Online via Booksy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
