"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "2.5M+", label: "Instagram Followers" },
  { value: "7", label: "Days a Week" },
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

        {/* Viral / Instagram Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                <InstagramIcon className="w-12 h-12 md:w-14 md:h-14 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">
                Gone Viral
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4">
                2.5 Million Followers & Counting
              </h3>
              <p className="text-cream/60 text-lg leading-relaxed mb-6 max-w-2xl">
                What started as a local barbershop in Hoddesdon has become an
                internet sensation. With over 2.5 million followers on Instagram,
                our work has reached millions worldwide — but the same precision,
                passion and personal touch that built that following is exactly
                what you get when you walk through our doors.
              </p>
              <a
                href="https://www.instagram.com/wiseguyshoddesdon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg text-sm tracking-wide transition-opacity"
              >
                <InstagramIcon className="w-4 h-4" />
                Follow @wiseguyshoddesdon
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
