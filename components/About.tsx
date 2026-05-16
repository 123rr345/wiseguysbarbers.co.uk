"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "7", label: "Days a Week" },
  { value: "∞", label: "Walk-ins Welcome" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/gallery/cut-08.jpg"
                alt="Inside Wise Guys Barbers, Hoddesdon"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg hidden lg:block" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Why Wise Guys
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-8">
              Craftsmanship
              <br />
              Meets Character
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-6">
              At Wise Guys, every cut is personal. We take the time to
              understand your style, your hair, and what makes you feel your
              best. From classic fades to modern perms, our experienced team
              delivers precision and attention to detail in a relaxed,
              welcoming atmosphere.
            </p>
            <p className="text-cream/60 text-lg leading-relaxed mb-10">
              Based in the heart of Hoddesdon, we&apos;ve been the
              neighbourhood&apos;s go-to barbershop for over two decades.
              No appointment needed — just walk in.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="text-center p-4 rounded-lg border border-white/10 bg-white/[0.02]"
                >
                  <p className="font-serif text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-cream/50 text-xs uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
