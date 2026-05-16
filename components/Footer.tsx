import { Phone, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="font-serif font-bold text-gold text-sm">
                  WG
                </span>
              </div>
              <span className="font-serif text-xl font-bold text-cream">
                Wise Guys Barbers
              </span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Hoddesdon&apos;s home for sharp cuts, skin fades, beard trims,
              hot towel shaves, and professional perms.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Services", "Gallery", "About", "Visit"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-cream/50 hover:text-gold text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="https://wiseguysbarberhoddesdon31.booksy.com/a"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gold hover:text-gold-dark text-sm font-medium transition-colors"
              >
                Book Online →
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:01992676774"
                className="flex items-center gap-3 text-cream/50 hover:text-gold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                01992 676774
              </a>
              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>
                  3A Brocket Road
                  <br />
                  Hoddesdon, EN11 8NZ
                </span>
              </div>
              <a
                href="https://www.instagram.com/wiseguyshoddesdon"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/50 hover:text-gold text-sm transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-gold" />
                @wiseguyshoddesdon
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Wise Guys Barbers. All rights
            reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Site by{" "}
            <span className="text-cream/30">Your Name Here</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
