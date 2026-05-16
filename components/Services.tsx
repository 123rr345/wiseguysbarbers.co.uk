"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Flame, Sparkles, Droplets, Waves, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { popularServices, otherServices, type Service } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-5 h-5" />,
  flame: <Flame className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
  waves: <Waves className="w-5 h-5" />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative group flex items-center justify-between p-5 rounded-lg border transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.03] ${
        service.isNew
          ? "border-gold/40 bg-gold/[0.05]"
          : "border-white/10 bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start gap-4 flex-1 min-w-0">
        <div className="text-gold mt-0.5 shrink-0">
          {iconMap[service.icon] || <Scissors className="w-5 h-5" />}
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-serif text-lg font-semibold text-cream">
              {service.name}
            </h3>
            {service.isNew && (
              <span className="bg-gold text-dark text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                New
              </span>
            )}
          </div>
          <p className="text-cream/50 text-sm mt-1 leading-relaxed">
            {service.description}
          </p>
          {service.tagline && (
            <p className="text-gold/70 text-xs italic mt-1">{service.tagline}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0 ml-4">
        <div className="text-right">
          <p className="text-gold font-bold text-lg">{service.price}</p>
          <p className="text-cream/40 text-xs flex items-center gap-1 justify-end">
            <Clock className="w-3 h-3" />
            {service.duration}
          </p>
        </div>
        <a
          href="https://wiseguysbarberhoddesdon31.booksy.com/a"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold hover:bg-gold-dark text-dark font-semibold px-4 py-2 rounded text-sm transition-colors whitespace-nowrap"
        >
          Book
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [showOther, setShowOther] = useState(false);

  return (
    <section id="services" className="relative py-24 md:py-32 grain">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
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
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Our Services
          </h2>
          <p className="text-cream/50 text-sm">
            All prices shown are standard rates. Book online for the best deals.
          </p>
        </motion.div>

        {/* Popular Services */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
            <span className="text-gold">&#9733;</span> Popular Services
          </h3>
          <div className="space-y-3">
            {popularServices.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* Toggle for Other Services */}
        <button
          onClick={() => setShowOther(!showOther)}
          className="w-full flex items-center justify-center gap-2 py-4 text-cream/60 hover:text-gold transition-colors text-sm uppercase tracking-wider border-t border-white/10 mt-8"
        >
          {showOther ? "Hide" : "Show"} Other Services ({otherServices.length})
          {showOther ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showOther && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-3 mt-6"
          >
            {otherServices.map((service, i) => (
              <ServiceCard key={service.name} service={service} index={i} />
            ))}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wiseguysbarberhoddesdon31.booksy.com/a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-dark text-dark font-bold px-10 py-4 rounded text-lg transition-colors"
          >
            View All & Book on Booksy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
