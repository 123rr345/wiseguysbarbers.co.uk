"use client";

import { motion } from "framer-motion";
import { Scissors, Flame, Sparkles, Droplets, Waves } from "lucide-react";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-6 h-6" />,
  flame: <Flame className="w-6 h-6" />,
  sparkles: <Sparkles className="w-6 h-6" />,
  droplets: <Droplets className="w-6 h-6" />,
  waves: <Waves className="w-6 h-6" />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group p-8 rounded-lg border transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.03] ${
                service.isNew
                  ? "border-gold/40 bg-gold/[0.05]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {service.isNew && (
                <span className="absolute top-4 right-4 bg-gold text-dark text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                  New
                </span>
              )}
              <div className="text-gold mb-4">
                {iconMap[service.icon] || <Scissors className="w-6 h-6" />}
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                {service.name}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              {service.tagline && (
                <p className="text-gold/80 text-xs italic mb-3">
                  {service.tagline}
                </p>
              )}
              <p className="text-gold font-semibold text-sm">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
