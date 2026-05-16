"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const hours = [
  { days: "Monday – Thursday", time: "8:00 AM – 6:30 PM" },
  { days: "Friday – Saturday", time: "8:00 AM – 6:00 PM" },
  { days: "Sunday", time: "9:00 AM – 4:00 PM" },
];

function getTodayIndex(): number {
  const day = new Date().getDay();
  if (day >= 1 && day <= 4) return 0;
  if (day === 5 || day === 6) return 1;
  return 2;
}

export default function Visit() {
  const todayIdx = getTodayIndex();

  return (
    <section id="visit" className="relative py-24 md:py-32 grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream">
            Visit Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden h-[400px] lg:h-full min-h-[400px] border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2473.8!2d-0.0099!3d51.7612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763e7c1c0b0001%3A0x1234567890!2s3A+Brocket+Rd%2C+Hoddesdon+EN11+8NZ!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wise Guys Barbers location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Hours */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-gold w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold text-cream">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div
                    key={h.days}
                    className={`flex justify-between items-center py-2 px-3 rounded ${
                      i === todayIdx
                        ? "bg-gold/10 border border-gold/30"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-sm ${
                        i === todayIdx ? "text-gold font-semibold" : "text-cream/70"
                      }`}
                    >
                      {h.days}
                      {i === todayIdx && (
                        <span className="ml-2 text-xs text-gold/70">(Today)</span>
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        i === todayIdx ? "text-gold" : "text-cream"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-gold w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold text-cream">
                  Address
                </h3>
              </div>
              <p className="text-cream/70 mb-4">
                3A Brocket Road
                <br />
                Hoddesdon, Hertfordshire
                <br />
                EN11 8NZ
              </p>
              <a
                href="https://www.google.com/maps/dir//3A+Brocket+Rd,+Hoddesdon+EN11+8NZ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-dark text-sm font-medium transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-gold w-5 h-5" />
                <h3 className="font-serif text-xl font-semibold text-cream">
                  Call Us
                </h3>
              </div>
              <a
                href="tel:01992676774"
                className="text-2xl font-serif font-bold text-cream hover:text-gold transition-colors"
              >
                01992 676774
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
